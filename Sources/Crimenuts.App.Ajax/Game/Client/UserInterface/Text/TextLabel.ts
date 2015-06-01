module Crimenuts {

    export class TextLabel extends Phaser.Graphics {

        private label: Phaser.Text;
        private fontSize: number;

        constructor(
            game: Phaser.Game,
            width: number, height: number,
            fontFace: string = Settings.Default.Font.face,
            fontSize: number = Settings.Default.Font.size,
            color: string = Settings.Default.Font.color, 
            bgcolor: number = Settings.Default.Font.bgColor
            ) {

            super( game, 0, 0 );

            this.createBackground(width, height, bgcolor);
            this.createLabel(fontFace, fontSize, color);

            this.alignLeft();
            this.alignMiddle();
        }

        setText( text: string ) {
            this.label.text = text;
        }

        alignLeft() {
            this.label.x = ( this.fontSize ) / 3;
            this.label.anchor.x = 0;
            this.label.align = "left";
        }

        alignCenter() {
            this.label.x = this.width / 2;
            this.label.anchor.x = 0.5;
            this.label.align = "center";
        }

        alignTop() {
            this.label.y = 0;
            this.label.anchor.y = 0;
        }

        alignMiddle() {
            this.label.y = this.height / 2 + 1;
            this.label.anchor.y = 0.5;
        }

        setFontBold() {
            this.label.fontWeight = "bold";
        }

        // utils
        private createLabel( fontFace: string, fontSize: number, color: string ) {
            this.fontSize = fontSize;

            var magicScale = 2.1;
            fontSize *= magicScale;

            this.addChild( this.label = new Phaser.Text(
                this.game, 0, 0, "", {
                    font: `${fontSize}px ${fontFace}`,
                    fill: color,
                    align: "left"
                }) );

            this.label.scale.set( 1/magicScale, 1/magicScale );
        }

        private createBackground( width: number, height: number, bgcolor: number ) {
            var a = bgcolor === Settings.BgColor.transparent? 0: 1;
            this.beginFill( bgcolor, a );
            this.drawRect( 0, 0, width, height );
            this.endFill();
        }
    }
}