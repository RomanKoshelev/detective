/// <reference path="../Command.ts" />
module Crimenuts {
    export class UserActionCommand extends Command {

        // Ctor
        constructor( name: string, action: UserActionCode, processId: string ) {
            super( name );
            this.callback = this.doExecute;
            this.context = this;
            this.processId = processId;
            this.action = action;
        }

        // Protected
        protected processId: string;
        protected action: UserActionCode;

        protected getController(): IProcessController {
            return app.processDirector.getController();
        }

        // Virtual
        protected doExecute() {}

        // Overrides 
        protected doUpdateAvailability(): boolean {
            var process = app.processDirector.getProcessModel();
            if( process.Id !== this.processId ) {
                return false;
            }

            var res = false;
            process.Actions.forEach( a => {
                if( this.action === UserActionCode[ a.Type ] ) {
                    res = true;
                }
            } );

            return res;
        }
    }
}