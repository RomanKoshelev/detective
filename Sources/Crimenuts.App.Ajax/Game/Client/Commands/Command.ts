module Crimenuts {
    export class Command implements ICommand {

        // ICommand
        updateAvailability() {
            this.isAvailable = this.doUpdateAvailability();
        }

        name: string;
        callback: Function;
        context: any;
        isAvailable: boolean;

        static nothing: ICommand = new Command();

        // Ctor
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

        // Virtual
        protected doUpdateAvailability() : boolean { return true; }
    }
}