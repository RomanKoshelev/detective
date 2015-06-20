module Crimenuts {

    export class RectangleDecor extends Phaser.Graphics implements IDecorable {

        constructor(
            component: IDecorable,
            fillColor: number = Settings.Default.Shape.fillColor,
            lineColor: number = Settings.Default.Shape.lineColor,
            lineWidth: number = Settings.Default.Shape.lineWidth
        ) {
            var size = component.getSize();

            super( app.game, 0, 0 );

            this.createRectangle( size, fillColor, lineColor, lineWidth );

            this.addChild( component.getDisplayObject() );
            this.component = component;
        }

        private component: IDecorable;

        getSize(): Size { return this.component.getSize(); }

        getDisplayObject(): PIXI.DisplayObject { return this; }

        createRectangle(
            size: Size,
            fillColor: number,
            lineColor: number,
            lineWidth: number
        ) {
            this.lineStyle( lineWidth, lineColor );
            this.beginFill( fillColor );
            this.drawRect( 0, 0, size.width, size.height );
            this.endFill();
        }
    }
}