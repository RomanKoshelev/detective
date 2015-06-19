module Crimenuts {
    export interface IUIFactory{
        makeDefaultButton( command: Command, position?: Phaser.Point) : IButton;
        makeTopMenuButton( command: Command, position?: Phaser.Point) : IButton;
        makeTextLabel( width: number, height: number, textColor: string, bgColor: number ): ITextArea;
    }
}