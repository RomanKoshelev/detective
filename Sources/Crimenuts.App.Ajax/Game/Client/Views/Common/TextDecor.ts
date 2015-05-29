module Crimenuts {

    export class TextDecor extends Phaser.Group {

        constructor(
            subj: IDecorable,
            text: string,
            fontFace: string = Settings.Default.Font.face,
            fontSize: number = Settings.Default.Font.size,
            color: string = Settings.Default.Font.color
        ) {
            var game = subj.getGame();
            var size = subj.getSize();

            super( game );

            this.textLabel = new TextLabel(
                game,
                size.width, size.height,
                fontFace,
                fontSize,
                color,
                Settings.BgColor.transparent
            );
            this.textLabel.setText( text );
            this.textLabel.alignCenter();
            this.add( this.textLabel );
        }

        private textLabel: TextLabel;
    }
}