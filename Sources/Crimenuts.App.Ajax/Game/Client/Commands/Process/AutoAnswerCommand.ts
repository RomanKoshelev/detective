/// <reference path="../Command.ts" />
/// <reference path="../../Managers/Process/IProcessController.ts" />
module Crimenuts {
    export class AutoAnswerCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Auto", () => controller.autoAnswer( processId ) );
        }
    }
}