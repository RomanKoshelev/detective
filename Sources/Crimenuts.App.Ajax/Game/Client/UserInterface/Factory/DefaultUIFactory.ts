module Crimenuts {
    export class DefaultUIFactory implements IUIFactory {
        makeDefaultButton( command: Command, position: Phaser.Point) : any {
            return new WhiteButton( command, position );
        }
    }
}