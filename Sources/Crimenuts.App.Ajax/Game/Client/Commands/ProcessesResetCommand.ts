/// <reference path="./Command.ts" />
module Crimenuts {
    export class ProcessesResetCommand extends Command {
        constructor() {
            super( "Reset" );
            this.callback = this.execute;
            this.context = this;
        }

        execute() {
            app.server.resetProcesses();
        }
    }
}