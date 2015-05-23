module Crimenuts {
    export class ProcessView {
        game: Phaser.Game;
        id: string;

        constructor( game: Phaser.Game, server : ServerAdapter ) {
            this.game = game;

            server.getSession().done( ( model: SessionModel ) => {
                this.fromModel( model );
            } );

            server.onSessionUpdated.add( this.onSessionUpdated, this );
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