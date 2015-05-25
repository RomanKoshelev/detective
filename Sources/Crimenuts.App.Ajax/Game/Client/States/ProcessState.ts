module Crimenuts {
    export class ProcessState extends Phaser.State {

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

        static background = "#000000";
        static membersPosition = new Phaser.Point( 10, 50 );

        private ui: UserInterface;
        private members: ProcessMembers;

        private model: ProcessModel;
        private tickCount: Number;

        private onProcessUpdated( model: ProcessModel ) {
            this.model = model;
        }
        
        private createMembersView() {
            this.members = new ProcessMembers( this.game, this.model.World, this.model.Members );
            this.members.position = ProcessState.membersPosition;
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
            this.ui = new UserInterface( this.game );
            this.updateUi();
        }
    }
}