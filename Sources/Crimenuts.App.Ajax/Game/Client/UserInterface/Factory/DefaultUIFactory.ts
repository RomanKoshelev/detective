module Crimenuts {
    export class DefaultUIFactory implements IUIFactory {
        makeDefaultButton(
            game: Phaser.Game,
            text: string,
            callback: Function,
            callbackContext,
            position: Phaser.Point
        ) : any {
            return new WhiteButton( game, text, callback, callbackContext, position );
        }
    }
}