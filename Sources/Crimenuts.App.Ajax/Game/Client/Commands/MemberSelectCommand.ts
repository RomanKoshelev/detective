/// <reference path="./Command.ts" />
/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
module Crimenuts {
    import MemberDialog = View.Process.MemberDialog;

    export class MemberSelectCommand extends Command {

        constructor( controller: IProcessController, memberId: number ) {
            super( "Open Member Dialog", () => {
                MemberDialog.instance.setMember( memberId );
                controller.currentMemberChanged( memberId );
            } );
        }
    }
}
