module Crimenuts {
    export class SessionManager {
        game: Phaser.Game;
        id: string;

        constructor( game: Phaser.Game ) {
            this.game = game;

            app.server.getSession().done( ( model: SessionModel ) => {
                this.fromModel( model );
            } );

            app.server.onSessionUpdated.add( this.onSessionUpdated, this );
        }

        private serverUpdateInterval: number;

        private fromModel( model: SessionModel ) {
            this.id = model.Id;
            this.serverUpdateInterval = model.UpdateInterval;
        }

        private onSessionUpdated( model: SessionModel ) {
            this.fromModel( model );
        }
    }
}