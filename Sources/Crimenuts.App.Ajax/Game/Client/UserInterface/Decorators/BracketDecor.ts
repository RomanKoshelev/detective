module Crimenuts {

    export class BracketDecor extends Phaser.Graphics implements IDecorable {

        constructor(
            component: IDecorable,
            lineColor: number = Settings.Default.Shape.lineColor,
            lineWidth: number = Settings.Default.Shape.lineWidth
        ) {
            var size = component.getSize();

            super( app.game, 0, 0 );

            this.addChild( component.getDysplayObject() );
            this.createBrackets( size, lineColor, lineWidth );
            this.component = component;
        }

        private component: IDecorable;

        getSize(): Size { return this.component.getSize(); }

        getDysplayObject(): PIXI.DisplayObject { return this; }

        createBrackets(
            size: Size,
            lineColor: number,
            lineWidth: number
        ) {
            this.lineStyle( lineWidth, lineColor );
            var lw = lineWidth / 2;
            var l = lw;
            var t = lw;
            var r = size.width;
            var b = size.height;
            var d = Math.min( size.width, size.height );

            this.moveTo( l, 0 );
            this.lineTo( l, d );
            this.moveTo( 0, t );
            this.lineTo( d, t );

/*
            this.moveTo( r - l, b );
            this.lineTo( r - l, b - d );
            this.moveTo( r, b - l );
            this.lineTo( r - d, b - l );
*/
        }
    }
}