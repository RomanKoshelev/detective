/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class AutoAnswerCommand extends UserActionCommand {

        constructor( director: IProcessDirector, processId: string ) {
            super( "Auto Answer", director, processId, UserActionCode.AutoAsk);
        }

        protected doExecute() {
            this.getController().autoAnswer( this.processId );
        }
    }
}