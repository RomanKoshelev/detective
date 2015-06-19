/// <reference path="../Command.ts" />
/// <reference path="../../Managers/Process/IProcessController.ts" />
module Crimenuts {
    export class MemberArrestCommand extends Command {
        constructor( controller: IProcessController, processId: string ) {
            super( "Arrest" );
            this.callback = this.execute;
            this.context = this;
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
        private memberId = 0;
        private controller: IProcessController;
    }
}