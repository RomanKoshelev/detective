module Crimenuts {
    export class DefaultUIFactory implements IUIFactory {
        makeDefaultButton( command: Command, position: Phaser.Point ): any {
            return new WhiteButton( command, position );
        }

        makeTextLabel(
            width: number,
            height: number,
            color: string,
            bgColor: number
        ): TextLabel {
            return new TextLabel(
                width,
                height,
                Settings.Default.Font.face,
                height * Settings.UserInterface.TextLabel.fontSizeToHeightRate,
                color,
                bgColor
            );
        }
    }
}