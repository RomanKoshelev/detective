/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
module Crimenuts {
    import MemberDialog = View.Process.MemberDialog;

    export class MemberDialogCommand extends Command {

        constructor( memberId: number ) {
            super( "Open Member Dialog" );
            this.callback = this.execute;
            this.context = this;
            this.memberId = memberId;
        }

        private memberId: number;

        private execute() {
            MemberDialog.instance.setMember( this.memberId );
        }
    }
}