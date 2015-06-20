/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class MemberMarkCommand extends UserActionCommand {

        constructor( director: IProcessDirector, processId: string ) {
            super( "Mark", director, processId, UserActionCode.Mark );
        }

        protected doUpdateAvailability(): boolean {
            return true;
        }

        protected doExecute() {
        }
    }
}