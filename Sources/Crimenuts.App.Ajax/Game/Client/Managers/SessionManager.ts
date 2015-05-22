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
            this.uiLevel.add(new TopBar(this.game));
            this.uiLevel.add(new BottomBar(this.game));
        }
    }

    class TopBar extends Phaser.Graphics {
        constructor( game: Phaser.Game ) {
            var h1 = 30;
            var h2 = 3;
            var c1 = 0x005500;
            var c2 = 0x770000;

            var wg = game.width;
            var x = 0;
            var y = 0;
            super( game, x, y );
            this.beginFill( c1 );
            this.drawRect( 0, 0, wg, h1 );
            this.beginFill( c2 );
            this.drawRect( 0, h1, wg, h2 );
        }
    }

    class BottomBar extends Phaser.Graphics {
        constructor( game: Phaser.Game ) {
            var h1 = 3;
            var h2 = 30;
            var c1 = 0x770000;
            var c2 = 0x005500;

            var wg = game.width;
            var hg = game.height;
            var hb = h1 + h2;
            var x = 0;
            var y = hg - hb;
            super( game, x, y );
            this.beginFill( c1 );
            this.drawRect( 0, 0, wg, h1 );
            this.beginFill( c2 );
            this.drawRect( 0, h1, wg, h2 );
        }

    }

}