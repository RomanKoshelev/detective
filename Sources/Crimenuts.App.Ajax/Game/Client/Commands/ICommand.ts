module Crimenuts {
    export interface ICommand{
        callback: Function;
        context : any;
        name: string;
    }
}