/// <reference path="./Command.ts" />
/// <reference path="../Managers/Process/IProcessController.ts" />
module Crimenuts {
    export class MemberMarkCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Mark", () => {} );
        }
    }
}