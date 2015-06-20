module Crimenuts {
    export interface IButton extends IDisplayObject{
        getCommand(): ICommand;
        setCommand( command : ICommand);
    }
}