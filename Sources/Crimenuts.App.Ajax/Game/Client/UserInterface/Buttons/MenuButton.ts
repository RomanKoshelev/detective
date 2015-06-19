/// <reference path="TextButton.ts" />

module Crimenuts {

    export class MenuButton extends TextButton {
        constructor(
            command: ICommand,
            position: Phaser.Point=new Phaser.Point()
        ) {
            super(
                command,
                Settings.UserInterface.Button.Menu.Regular.colors,
                Settings.UserInterface.Button.Menu.Highlight.colors,
                Settings.UserInterface.Button.Menu.sizes,
                position
            );
        }
    }
}