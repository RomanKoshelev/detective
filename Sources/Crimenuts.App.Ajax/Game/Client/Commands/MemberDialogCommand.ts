/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
module Crimenuts {
    import IMemberDialog = View.Process.IMemberDialog;

    export class MemberDialogCommand extends Command {

        constructor( dialog: IMemberDialog, memberId: number ) {
            super( "Open Member Dialog" );
            this.callback = this.execute;
            this.context = this;
            this.dialog = dialog;
            this.memberId = memberId;
        }

        private dialog: IMemberDialog;
        private memberId: number;

        private execute() {
            this.dialog.setMember( this.memberId );
        }

    }
}