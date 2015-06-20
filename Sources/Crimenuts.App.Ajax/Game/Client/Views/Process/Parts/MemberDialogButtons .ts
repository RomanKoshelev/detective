/// <reference path="../../../UserInterface/Buttons/ButtonsHolder.ts" />
module Crimenuts.View.Process {
    export class MemberDialogButtons extends ButtonsHolder {

        // Ctor
        constructor( director: IProcessDirector, processId: string, memberId: number ) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Members.Dialog.Buttons.bottom;
            this.createButtons( director, processId, memberId );
        }

        // Create
        private createButtons( director: IProcessDirector, processId: string, memberId: number ) {
            this.createButtonAtBottom( new MemberMarkCommand( director, processId ), app.uiFactory.makeDefaultButton, 0 );
            this.createButtonAtBottom( new MemberArrestCommand( director, processId, memberId  ), app.uiFactory.makeDefaultButton, 1 );
        }
    }
}