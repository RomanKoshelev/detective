module Crimenuts {
    export class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor( essence: IDecorable ) {
            super( app.game );
            this.essence = essence;
        }

        getSize(): Size {
            return this.essence.getSize();
        }

        getDysplayObject(): PIXI.DisplayObject {
            return this.essence.getDysplayObject();
        }

        private essence: IDecorable;
    }
}