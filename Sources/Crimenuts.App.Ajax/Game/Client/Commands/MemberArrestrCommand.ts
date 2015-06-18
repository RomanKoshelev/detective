/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
module Crimenuts {
    export class MemberArrestrCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Arrest", this.execute, this );
            this.controller = controller;
            this.processId = processId;
            this.controller.onCurrentMemberChanged.add( this.onCurrentMemberChanged, this );
        }

        execute() {
            this.controller.arrest( this.processId, this.memberId );
        }

        onCurrentMemberChanged( memberId: number) {
            this.memberId = memberId;
        }

        private processId: string;
        private memberId : number;
        private controller: IProcessController;
    }
}