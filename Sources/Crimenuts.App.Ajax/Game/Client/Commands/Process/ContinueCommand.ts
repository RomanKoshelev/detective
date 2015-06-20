/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class ContinueCommand extends UserActionCommand {

        constructor( director: IProcessDirector, processId: string ) {
            super( "Continue", director, processId, UserActionCode.Continue );
        }

        protected doExecute() {
            this.getController().continue( this.processId );
        }
    }
}