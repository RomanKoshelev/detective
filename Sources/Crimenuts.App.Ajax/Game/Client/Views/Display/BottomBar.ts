module Crimenuts {
    export class BottomBar extends Phaser.Graphics {

        text: Phaser.Text;

        constructor() {
            super( app.game, 0, 0 );
            this.createBar();
        }

        private createBar() {
            var h1 = 3;
            var h2 = 30;
            var c1 = 0x770000;
            var c2 = 0x005500;

            var wg = app.game.width;
            var hg = app.game.height;
            var hb = h1 + h2;
            this.x = 0;
            this.y = hg - hb;

            this.beginFill( c1 );
            this.drawRect( 0, 0, wg, h1 );
            this.beginFill( c2 );
            this.drawRect( 0, h1, wg, h2 );

            this.addChild( this.text = new Phaser.Text(
                app.game,
                7, 7,
                "",
                {
                    font: "18px Arial",
                    fill: "#44dd44",
                    align: "left"
                }
            ) );
        }
    }
}