module Crimenuts {
    export class TextLabel extends Phaser.Graphics {

        private text: Phaser.Text;

        constructor(
            game: Phaser.Game,
            text: string,
            x: number, y: number,
            w: number, h: number,
            fs: number,
            c: string, bgc: number,
            fn: string = "Arial" ) {

            super( game, x, y );
            this.position.set( x, y );

            this.beginFill( bgc );
            this.drawRect( 0, 0, w, h );
            this.endFill();

            this.addChild( this.text = new Phaser.Text(
                game,
                w/2, h/2 + fs/5,
                text,
                {
                    font: `${fs}px ${fn}`,
                    fill: c,
                    align: "center"
                }) );

            this.text.anchor.set( 0.5, 0.5 );
        }
    }
}