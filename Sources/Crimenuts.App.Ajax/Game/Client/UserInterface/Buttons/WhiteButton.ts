module Crimenuts {

    export class WhiteButton extends TextButton {

        constructor(
            game: Phaser.Game,
            text: string,
            callback: Function,
            callbackContext: any,
            position: Phaser.Point
        ) {
            super(
                game,
                text,
                callback,
                callbackContext,
                Settings.UserInterface.Button.White.Regular.colors,
                Settings.UserInterface.Button.White.Highlight.colors,
                position
            );
        }
    }
}