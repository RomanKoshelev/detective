/// <reference path="TextButton.ts" />

module Crimenuts {

    export class WhiteButton extends TextButton {
        constructor(
            command: ICommand,
            position: Phaser.Point=new Phaser.Point()
        ) {
            super(
                command,
                Settings.UserInterface.Button.White.Regular.colors,
                Settings.UserInterface.Button.White.Highlight.colors,
                Settings.UserInterface.Button.sizes,
                position
            );
        }
    }
}