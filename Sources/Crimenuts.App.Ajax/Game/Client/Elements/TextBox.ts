module Crimenuts {
    export class TextBox extends Phaser.Graphics{

        text: Phaser.Text;

        constructor( game: Phaser.Game, text: string, x: number, y: number, w: number, h: number, fs: number ) {
            super( game, x, y );

            var bg = 0xEEEEEE;
            this.beginFill( bg );
            this.drawRect( 0, 0, w, h );
            this.endFill();
            

            this.addChild( this.text = new Phaser.Text(
                game,
                fs/2, fs/2,
                text,
                {
                    font: `${fs}px Arial`,
                    fill: "#44dd44",
                    align: "left"
                }) );
        }
    }
}