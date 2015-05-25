module Crimenuts {
    export class ProcessState extends Phaser.State {

        static background = "#000000";
        membersView: ProcessMembersView;

        constructor() {
            super();
        }

        init() {
            this.game.stage.backgroundColor = ProcessState.background;
        }

        preload() {
        }

        create() {
            app.server.getProcess().done( ( model: ProcessModel ) => {
                this.model = model;
                this.createMembersView();
                this.createUiView();
                this.subscribeEvents( app.server );
            } );
        }

        private ui: UserInterfaceView;
        private model: ProcessModel;
        private tickCount: Number;

        private onProcessUpdated( model: ProcessModel ) {
            this.model = model;
        }

        private createMembersView() {
            this.membersView = new ProcessMembersView( this.game, this.model.World, this.model.Members );
        }

        private subscribeEvents( server: ServerAdapter ) {
            server.onProcessUpdated.add( this.onProcessUpdated, this );
            server.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
            this.updateUi();
        }

        private updateUi() {
            this.ui.setCaseId( this.model.CaseId );
            this.ui.setBottomText( `${this.model.Id} [${app.tickCount}]` );
        }

        private createUiView() {
            this.ui = new UserInterfaceView( this.game );
            this.updateUi();
        }
    }
}