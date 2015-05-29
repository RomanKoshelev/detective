module Crimenuts {

    export class TextDecor extends Phaser.Group implements IDecorable {

        constructor(
            component: IDecorable,
            text: string,
            fontFace: string = Settings.Default.Font.face,
            fontSize: number = Settings.Default.Font.size,
            color: string = Settings.Default.Font.color
        ) {
            var game = component.getGame();
            var size = component.getSize();

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
            this.add( this.component = component );
            this.add( this.textLabel );
        }

        private component: IDecorable;
        private textLabel: TextLabel;

        getGame(): Phaser.Game { return this.component.getGame(); }

        getSize(): Size { return this.component.getSize(); }

        getDysplayObject(): PIXI.DisplayObject { return this; }
    }
}