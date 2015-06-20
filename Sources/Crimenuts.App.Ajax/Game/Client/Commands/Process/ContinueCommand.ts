/// <reference path="../Command.ts" />
/// <reference path="../../Managers/Process/IProcessController.ts" />
module Crimenuts {
    export class ContinueCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Continue", () => controller.continue( processId ) );
        }
    }
}