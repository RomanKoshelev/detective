 module Crimenuts {
    export class ProcessView {

        constructor( game: Phaser.Game, server : ServerAdapter ) {
            this.game = game;
            this.ui = new UserInterfaceView( this.game );

            server.getProcess().done( ( model: ProcessModel ) => {
                this.fromModel( model );
                this.updateUi();

                server.onProcessUpdated.add( this.onSessionUpdated, this );
                server.onTickCountUpdated.add( this.onTickCountUpdated, this );
            } );
        }

        private game: Phaser.Game;
        private processId: string;
        private caseId: string;
        private ui: UserInterfaceView;
        private tickCount: Number;
        private serverUpdateInterval: number;
        private members: string[];

        private fromModel( model: ProcessModel ) {
            this.processId = model.Id;
            this.caseId = model.CaseId;
            this.members = model.Company.Members;
        }

        private onSessionUpdated( model: ProcessModel ) {
            this.fromModel( model );
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
            this.updateUi();
        }

        private updateUi() {
            var members = this.getMemersNamesList();
            this.ui.setCaseId( this.caseId );
            this.ui.setBottomText( `${this.processId} ${members} [${app.tickCount}]` );
        }

        private getMemersNamesList() {
            var names = "";
            this.members.forEach( m => {
                names += m + " ";
            } );
            return names;
        }
    }
}