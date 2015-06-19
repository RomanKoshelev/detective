/// <reference path="./Command.ts" />
module Crimenuts {
    export class DevToolsCommand extends Command {
        constructor() {
            super( "Dev" );
            this.callback = this.execute;
            this.context = this;
        }

        execute() {
            // nothing
        }
    }
}