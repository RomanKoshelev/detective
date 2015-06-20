module Crimenuts {
    export class Command implements ICommand {
        constructor(
            name: string = "",
            callback: Function = null,
            context: any = null
        ) {
            this.name = name;
            this.callback = callback;
            this.context = context;
            this.isAvailable = true;
        }

        name: string;
        callback: Function;
        context: any;
        isAvailable: boolean;

        static nothing : ICommand = new Command();
    }
}