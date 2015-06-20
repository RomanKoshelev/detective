module Crimenuts {

    export class TextDecor extends Phaser.Group implements IDecorable {

        constructor(
            component: IDecorable,
            text: string,
            color: string = Settings.Default.Font.color,
            fontSize: number = Settings.Default.Font.size,
            fontFace: string = Settings.Default.Font.face
        ) {
            var size = component.getSize();

            super( app.game );

            this.textLabel = new TextLabel(
                size.width, size.height,
                fontFace,
                fontSize,
                color,
                Settings.Color.transparent
            );
            this.textLabel.setText( text );
            this.textLabel.alignCenter();
            this.add( this.component = component );
            this.add( this.textLabel );
        }

        private component: IDecorable;
        private textLabel: TextLabel;

        getSize(): Size { return this.component.getSize(); }

        getDisplayObject(): PIXI.DisplayObject { return this; }
    }
}