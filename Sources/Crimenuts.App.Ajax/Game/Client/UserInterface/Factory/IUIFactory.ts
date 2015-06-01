module Crimenuts {
    export interface IUIFactory{
        makeDefaultButton( game: Phaser.Game, text: string, callback: Function, callbackContext: any, position: Phaser.Point ) : any;
    }
}