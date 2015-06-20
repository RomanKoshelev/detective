module Crimenuts {
    export interface IUIFactory{
        makeMainButton( command: ICommand, position?: Phaser.Point) : IButton;
        makeTopMenuButton( command: ICommand, position?: Phaser.Point) : IButton;
        makeTextLabel( width: number, height: number, textColor: string, bgColor: number ): ITextArea;
        makeOptionalButton( command: ICommand, position?: Phaser.Point) : IButton;
    }
}