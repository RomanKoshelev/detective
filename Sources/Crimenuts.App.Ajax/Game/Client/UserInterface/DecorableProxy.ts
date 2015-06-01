module Crimenuts {
    export class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor( essence: IDecorable ) {
            super( essence.getGame() );
            this.essence = essence;
        }

        getGame(): Phaser.Game {
            return this.essence.getGame();
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