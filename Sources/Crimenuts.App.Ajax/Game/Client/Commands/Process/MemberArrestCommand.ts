/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class MemberArrestCommand extends UserActionCommand {

        constructor( director: IProcessDirector, processId: string, memberId : number ) {
            super( "Arrest", director, processId, UserActionCode.Arrest, 0 );
            this.setMemberId( memberId );
            this.getController().onCurrentMemberChanged.add( this.onCurrentMemberChanged, this );
        }

        protected doExecute() {
            this.getController().arrest( this.processId, this.memberId );
        }

        private memberId: number;

        private onCurrentMemberChanged( memberId: number ) {
            this.setMemberId( memberId );
        }

        private setMemberId( memberId: number ) {
            this.memberId = memberId;
            var memberNumber = this.getController().memberIdToNumber( memberId );
            this.args[ 0 ] = memberNumber;
        }

    }
}