/// <reference path="./MemberCommand.ts" />
module Crimenuts {
    export class MemberEarlyArrestCommand extends MemberCommand {

        constructor( director: IProcessDirector, processId: string, memberId: number ) {
            super( "Arrest", director, processId, UserActionCode.EarlyArrest, memberId );
        }

        protected doExecute() {
            this.getController().earlyArrest( this.processId, this.memberId );
        }
    }
}