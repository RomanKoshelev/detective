
/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
module Crimenuts {
    export class MemberMarkCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Mark", () => controller.autoAnswer( processId ) );
        }
    }
}