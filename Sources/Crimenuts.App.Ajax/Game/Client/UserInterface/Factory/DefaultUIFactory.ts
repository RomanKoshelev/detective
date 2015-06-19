﻿/// <reference path="../../Commands/ICommand.ts" />
/// <reference path="../Buttons/MenuButton.ts" />
/// <reference path="../Buttons/WhiteButton.ts" />
/// <reference path="../Text/TextLabel.ts" />

module Crimenuts {
    export class DefaultUIFactory implements IUIFactory {
        makeDefaultButton(
            command: Command,
            position: Phaser.Point = new Phaser.Point( 0, 0 )
        ): IButton {
            return new WhiteButton( command, position );
        }

        makeTopMenuButton(
            command: Command,
            position: Phaser.Point = new Phaser.Point( 0, 0 )
        ): IButton {
            return new MenuButton( command, position );
        }

        makeTextLabel(
            width: number,
            height: number,
            color: string,
            bgColor: number
        ): ITextLabel {
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