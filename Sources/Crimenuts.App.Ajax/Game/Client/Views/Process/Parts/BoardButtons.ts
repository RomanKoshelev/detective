﻿/// <reference path="../../../UserInterface/Buttons/ButtonsHolder.ts" />
module Crimenuts.View.Process {
    export class BoardButtons extends ButtonsHolder {

        // Ctor
        constructor( director: IProcessDirector, processId: string) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Board.Buttons.bottom;
            this.createButtons( director, processId );
        }

        // Create
        private createButtons( director: IProcessDirector, processId: string ) {
            this.createButtonAtBottom( new AutoAnswerCommand( director, processId ), app.uiFactory.makeDefaultButton, 0 );
            this.createButtonAtBottom( new ContinueCommand( director, processId ), app.uiFactory.makeDefaultButton, 0 );
        }
    }
}
