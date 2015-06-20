/// <reference path="TextButton.ts" />

module Crimenuts {

    export class FrameButton extends TextButton {
        constructor(
            command: ICommand,
            position: Phaser.Point=new Phaser.Point()
        ) {
            super(
                command,
                Settings.UserInterface.Button.Frame.Regular.colors,
                Settings.UserInterface.Button.Frame.Highlight.colors,
                Settings.UserInterface.Button.sizes,
                position
            );
        }
    }
}