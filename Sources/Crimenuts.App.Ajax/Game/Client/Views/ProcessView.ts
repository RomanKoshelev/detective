module Crimenuts {
    export class ProcessView {
        game: Phaser.Game;
        id: string;

        constructor( game: Phaser.Game, server : ServerAdapter ) {
            this.game = game;

            server.getProcess().done( ( model: ProcessModel ) => {
                this.fromModel( model );
            } );

            server.onProcessUpdated.add( this.onSessionUpdated, this );
        }

        private serverUpdateInterval: number;

        private fromModel( model: ProcessModel ) {
            this.id = model.Id;
        }

        private onSessionUpdated( model: ProcessModel ) {
            this.fromModel( model );
        }
    }
}