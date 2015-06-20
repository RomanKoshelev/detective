﻿/// <reference path="../../../UserInterface/Buttons/ButtonsHolder.ts" />
module Crimenuts.View.Process {
    export class BoardButtons extends ButtonsHolder implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
        }

        // Ctor
        constructor( director: IProcessDirector, processId: string) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Board.Buttons.bottom;
            this.createButtons( director, processId );
        }

        // Create
        private createButtons( director: IProcessDirector, processId: string ) {
            var controller = director.getController();

            var cmdAutoAnswer = new AutoAnswerCommand( controller, processId );
            var cmdContinue = new ContinueCommand( controller, processId );

            this.createButtonAtBottom( cmdAutoAnswer, app.uiFactory.makeDefaultButton, 0 );
            this.createButtonAtBottom( cmdContinue, app.uiFactory.makeDefaultButton, 1 );
        }
    }
}
