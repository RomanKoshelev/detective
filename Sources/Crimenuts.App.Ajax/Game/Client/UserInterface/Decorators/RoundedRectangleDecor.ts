module Crimenuts {

    export class RoundedRectangleDecor extends Phaser.Graphics implements IDecorable {

        constructor(
            component: IDecorable,
            fillColor: number = Settings.Default.Shape.fillColor,
            lineColor: number = Settings.Default.Shape.lineColor,
            lineWidth: number = Settings.Default.Shape.lineWidth
        ) {
            var size = component.getSize();

            super( app.game, 0, 0 );

            this.createRoundedRectangle( size, fillColor, lineColor, lineWidth );

            this.addChild( component.getDysplayObject() );
            this.component = component;
        }

        private component: IDecorable;

        getSize(): Size { return this.component.getSize(); }

        getDysplayObject(): PIXI.DisplayObject { return this; }

        createRoundedRectangle(
            size: Size,
            fillColor: number,
            lineColor: number,
            lineWidth: number
        ) {
            var radius = Math.min( size.width, size.height ) * Settings.Default.RoundedRectangle.radiusRate;
            this.lineStyle( lineWidth, lineColor );
            this.beginFill( fillColor );
            this.drawRoundedRect( 0, 0, size.width, size.height, radius );
            this.endFill();
        }
    }
}