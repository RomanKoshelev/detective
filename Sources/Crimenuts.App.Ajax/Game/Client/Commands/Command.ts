module Crimenuts {
    export class Command {
        constructor(
            name: string,
            callback: Function = null,
            context: any = null
        ) {
            this.name = name;
            this.callback = callback;
            this.context = context;
        }

        name: string;
        callback: Function;
        context: any;

        static nothing = new Command( "" );
    }
}