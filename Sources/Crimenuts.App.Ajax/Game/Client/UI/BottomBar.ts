module Crimenuts {
    export class BottomBar extends Phaser.Graphics {

        text: Phaser.Text;

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

            this.addChild( this.text = new Phaser.Text(
                game,
                7, 7,
                "Case #1969",
                {
                    font: "18px Arial",
                    fill: "#44dd44",
                    align: "left"
                }) );
            
        }

        preUpdate() {
            this.text.setText(`[${app.tickCount}]`);
        }
    }
}