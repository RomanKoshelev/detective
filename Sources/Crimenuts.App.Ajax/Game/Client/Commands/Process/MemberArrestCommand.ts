/// <reference path="./MemberUserActionCommand.ts" />
module Crimenuts {
    export class MemberArrestCommand extends MemberUserActionCommand {

        constructor( director: IProcessDirector, processId: string, memberId : number ) {
            super( "Arrest", director, processId, UserActionCode.Arrest, memberId );
        }

        protected doExecute() {
            this.getController().arrest( this.processId, this.memberId );
       }
    }
}