/// <reference path="../Command.ts" />
module Crimenuts {
    export class UserActionCommand extends Command {
        constructor( name: string, action: UserActionCode, processId: string ) {
            super( name );
            this.callback = this.doExecute;
            this.context = this;
            this.processId = processId;
            this.action = action;
        }

        protected processId: string;
        protected action: UserActionCode;

        protected doExecute() { }

        protected getController(): IProcessController {
            return app.processDirector.getController();
        }
    }
}