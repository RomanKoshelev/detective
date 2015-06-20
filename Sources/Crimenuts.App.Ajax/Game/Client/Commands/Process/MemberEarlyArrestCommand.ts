/// <reference path="./MemberUserActionCommand.ts" />
module Crimenuts {
    export class MemberEarlyArrestCommand extends MemberUserActionCommand {

        constructor( director: IProcessDirector, processId: string, memberId : number ) {
            super( "Arrest*", director, processId, UserActionCode.EarlyArrest, memberId );
        }

        protected doExecute() {
            this.getController().arrest( this.processId, this.memberId );
       }
    }
}