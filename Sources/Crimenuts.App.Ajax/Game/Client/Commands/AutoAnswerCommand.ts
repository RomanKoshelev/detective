/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
module Crimenuts.View.Process {
    export class AutoAnswerCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Auto answer", () => controller.autoAnswer( processId ) );
        }
    }
}