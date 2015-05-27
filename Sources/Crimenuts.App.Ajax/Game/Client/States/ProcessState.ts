module Crimenuts {
    export class ProcessState extends Phaser.State {

        constructor() {
            super();
        }

        init() {
            this.game.stage.backgroundColor = Settings.Process.bgColor;
        }

        preload() {
        }

        create() {
            app.server.getProcess().done( ( model: ProcessModel ) => {
                this.model = model;
                this.createMembers();
                this.createUi();
                this.createStateBar();
                this.subscribeEvents( app.server );
                this.updateUi();
            } );
        }

        // Data
        private model: ProcessModel;
        private tickCount: Number;

        // Parts
        private ui: UserInterface;
        private members: Members;
        private stateBar: ProcessStateBar;

        private createStateBar() {
            this.stateBar = new ProcessStateBar( this.game );
            this.stateBar.position = Settings.Process.StateBar.position;
        }

        private createMembers() {
            this.members = new Members( this.game, this.model.World, this.model.Members );
            this.members.position = Settings.Process.Members.position;
        }
        
        private createUi() {
            this.ui = new UserInterface( this.game );
        }

        private updateUi() {
            this.ui.setCaseId( this.model.CaseId );
            this.ui.setBottomText( `${this.model.Id} [${app.tickCount}]` );
            this.stateBar.setText( this.model.State );
        }

        // Events
        private subscribeEvents( server: ServerAdapter ) {
            server.onProcessUpdated.add( this.onProcessUpdated, this );
            server.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
            this.updateUi();
        }
        private onProcessUpdated( model: ProcessModel ) {
            this.model = model;
            this.updateUi();
        }
    }
}