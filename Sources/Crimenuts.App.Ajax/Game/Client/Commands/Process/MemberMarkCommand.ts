/// <reference path="./MemberUserActionCommand.ts" />
module Crimenuts {
    export class MemberMarkCommand extends MemberUserActionCommand {

        constructor( director: IProcessDirector, processId: string, memberId:number ) {
            super( "Mark", director, processId, UserActionCode.Mark, memberId );
        }

        protected doUpdateAvailability(): boolean {
            return true;
        }

        protected doExecute() {
        }
    }
}