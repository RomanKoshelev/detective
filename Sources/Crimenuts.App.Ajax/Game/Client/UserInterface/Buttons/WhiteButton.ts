module Crimenuts {

    export class WhiteButton extends TextButton {
        constructor(
            command: Command,
            position: Phaser.Point=new Phaser.Point()
        ) {
            super(
                command,
                Settings.UserInterface.Button.White.Regular.colors,
                Settings.UserInterface.Button.White.Highlight.colors,
                position
            );
        }
    }
}