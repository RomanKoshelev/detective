/// <reference path="./UserActionCommand.ts" />
module Crimenuts {
    export class MemberCommand extends UserActionCommand {

        constructor( name: string, director: IProcessDirector, processId: string, action: UserActionCode, ...args: number[] ) {
            super( name, director, processId, action, args );
            this.setMemberId( args[ 0 ] );
            this.getController().onCurrentMemberChanged.add( this.onCurrentMemberChanged, this );
        }

        protected memberId: number;

        protected onCurrentMemberChanged( memberId: number ) {
            this.setMemberId( memberId );
        }

        protected setMemberId( memberId: number ) {
            this.memberId = memberId;
            var memberNumber = this.getController().memberIdToNumber( memberId );
            this.args[ 0 ] = memberNumber;
        }

        protected getMemberModel(): MemberModel {
            return this.director.getProcessModel().Members[ this.memberId ];
        }
    }
}