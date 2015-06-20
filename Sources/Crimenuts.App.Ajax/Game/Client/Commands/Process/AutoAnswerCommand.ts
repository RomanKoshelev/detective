/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class AutoAnswerCommand extends UserActionCommand {

        constructor( processId: string ) {
            super( "Auto Answer", UserActionCode.AutoAsk, processId );
        }

        protected doExecute() {
            this.getController().autoAnswer( this.processId );
        }
    }
}