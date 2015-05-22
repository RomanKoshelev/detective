module Crimenuts {
    export class SessionManager {
        game: Phaser.Game;
        id: string;
        uiLevel: Phaser.Group;

        constructor( game: Phaser.Game ) {
            this.game = game;

            app.server.getSession().done( ( model: SessionModel ) => {
                this.fromModel( model );
            } );

            app.server.onSessionUpdated.add( this.onSessionUpdated, this );
        }

        private serverUpdateInterval: number;

        private createLevels() {
            this.uiLevel = this.game.add.group();
        }

        private destroyLevels() {
            this.uiLevel.destroy();
        }

        private fromModel( model: SessionModel ) {
            this.id = model.Id;
            this.serverUpdateInterval = model.UpdateInterval;
            this.createLevels();
            this.createUi();
        }

        private onSessionUpdated( model: SessionModel ) {
            this.destroyAll();
            this.fromModel( model );
        }

        private destroyAll() {
            this.destroyLevels();
        }

        createUi() {
            var topBar = new TopBar(this.game);
            this.uiLevel.add(topBar);
        }
    }

    class TopBar extends Phaser.Graphics {
        constructor( game: Phaser.Game ) {
            super( game, 0, 0 );
            this.beginFill( 0x004400 );
            this.drawRect( 0, 0, game.width, 30 );
        }

    }

}