module Crimenuts {

    export class Decorable extends Phaser.Sprite implements IDecorable {

        constructor(
            width: number,
            height: number
        ) {
            super( app.game, 0, 0, Settings.Assets.Sprites.transparent );
            this.resize( width, height );
        }

        // IDecorable
        getSize(): Size {
            return new Size( this.width, this.height );
        }

        getDysplayObject(): PIXI.DisplayObject { return this; }

        // Utils
        private resize( width: number, height: number ) {
            this.scale.set( width / this.texture.width, height / this.texture.height );
        }
    }
}