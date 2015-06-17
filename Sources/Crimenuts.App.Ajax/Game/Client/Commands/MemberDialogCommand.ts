/// <reference path="./Command.ts" />
/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
module Crimenuts {
    import MemberDialog = View.Process.MemberDialog;

    export class MemberDialogCommand extends Command {

        constructor( memberId: number ) {
            super( "Open Member Dialog", () => MemberDialog.instance.setMember( memberId ) );
        }
    }
}