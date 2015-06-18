/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
module Crimenuts {
    export class MemberArrestrCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Arrest", () => controller.autoAnswer( processId ) );
        }
    }
}