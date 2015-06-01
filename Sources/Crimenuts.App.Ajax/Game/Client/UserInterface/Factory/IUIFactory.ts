module Crimenuts {
    export interface IUIFactory{
        makeDefaultButton( command: Command, position: Phaser.Point ) : any;
    }
}