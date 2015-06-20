module Crimenuts {
    export class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor( essence: IDecorable ) {
            super( app.game );
            this.essence = essence;
        }

        getSize(): Size {
            return this.essence.getSize();
        }

        getDisplayObject(): PIXI.DisplayObject {
            return this.essence.getDisplayObject();
        }

        private essence: IDecorable;
    }
}