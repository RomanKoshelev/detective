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
            var controller = director.getController();

            var cmdMark = new MemberMarkCommand( controller, processId );
            var cmdArrest = new MemberArrestCommand( controller, processId );

            this.createButtonAtBottom( cmdArrest, app.uiFactory.makeDefaultButton, 0 );
            this.createButtonAtBottom( cmdMark, app.uiFactory.makeDefaultButton, 1 );
        }
    }
}
