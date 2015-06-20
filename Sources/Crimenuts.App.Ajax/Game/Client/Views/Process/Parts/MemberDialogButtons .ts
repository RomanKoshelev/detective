/// <reference path="../../../UserInterface/Buttons/ButtonsHolder.ts" />
module Crimenuts.View.Process {
    export class MemberDialogButtons extends ButtonsHolder implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
        }

        // Ctor
        constructor( director: IProcessDirector, processId: string) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Members.Dialog.Buttons.bottom;
            this.createButtons( director, processId );
        }

        // Create
        private createButtons( director: IProcessDirector, processId: string ) {
            //this.createButtonAtBottom( new MemberMarkCommand( processId ), app.uiFactory.makeDefaultButton, 0 );
//            this.createButtonAtBottom( new MemberArrestCommand( processId ), app.uiFactory.makeDefaultButton, 1 );
        }
    }
}
