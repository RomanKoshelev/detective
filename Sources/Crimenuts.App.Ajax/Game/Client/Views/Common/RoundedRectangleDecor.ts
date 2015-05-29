module Crimenuts {

    export class RoundedRectangleDecor extends Phaser.Graphics implements IDecorable {

        constructor(
            component: IDecorable
        ) {
            var game = component.getGame();
            var size = component.getSize();

            super( game, 0, 0 );

            this.createRoundedRectangle(size);

            this.addChild( component.getDysplayObject() );
            this.component = component;
        }

        private component: IDecorable;

        getGame(): Phaser.Game { return this.component.getGame(); }

        getSize(): Size { return this.component.getSize(); }

        getDysplayObject(): PIXI.DisplayObject { return this; }


        createRoundedRectangle( size: Size ) {
            var radius = Math.min( size.width, size.height ) * Settings.Default.RoundedRectangle.radiusRate;
            this.lineStyle(2,Settings.BgColor.white);
            this.beginFill( Settings.BgColor.black );
            this.drawRoundedRect( 0, 0, size.width, size.height, radius );
            this.endFill();
        }
    }
}