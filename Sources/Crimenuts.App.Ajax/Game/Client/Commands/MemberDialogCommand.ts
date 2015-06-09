/// <reference path="../UserInterface/Types/Command.ts" />
/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
module Crimenuts {
    import MemberDialog = View.Process.MemberDialog;

    export class MemberDialogCommand extends Command {

        constructor() {
            super( "Open Member Dialog" );
            this.callback = this.execute;
            this.context = this;
        }

        private dialog : MemberDialog = null;

        private execute() {
            if( this.dialog == null ) {
                this.dialog = new MemberDialog();
            }
        }
    }
}