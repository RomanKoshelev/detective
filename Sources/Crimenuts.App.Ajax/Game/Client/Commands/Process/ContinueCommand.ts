/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class ContinueCommand extends UserActionCommand {

        constructor( processId: string ) {
            super( "Continue", UserActionCode.Continue, processId );
        }

        protected doExecute() {
            this.getController().continue( this.processId );
        }
    }
}