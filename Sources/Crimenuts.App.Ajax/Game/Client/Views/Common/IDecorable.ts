module Crimenuts {
    export interface IDecorable {
        getGame(): Phaser.Game;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}