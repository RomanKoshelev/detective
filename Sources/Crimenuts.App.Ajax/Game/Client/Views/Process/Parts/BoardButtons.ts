module Crimenuts.View.Process {
    export class BoardButtons extends Phaser.Group implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
            // do nothing
        }

        // Ctor
        constructor( director: IProcessDirector, processId: string) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Board.Buttons.bottom;
            this.createButtons( director, processId );
        }

        // Fields
        protected bottom: number;

        // Create
        private createButtons( director: IProcessDirector, processId: string ) {
            var controller = director.getController();

            var cmdAutoAnswer = new AutoAnswerCommand( controller, processId );
            var cmdContinue = new ContinueCommand( controller, processId );

            this.createButtonAtBottom( cmdAutoAnswer, app.uiFactory.makeDefaultButton, 0 );
            this.createButtonAtBottom( cmdContinue, app.uiFactory.makeDefaultButton, 1 );
        }

        private createButtonAtBottom( command: ICommand, method: Function, num: number ) {
            var button: IButton = method( command );
            var dy = Settings.UserInterface.Button.sizes.height + Settings.UserInterface.Button.verSpan;
            button.getDisplayObject().y = this.bottom - num * dy - Settings.UserInterface.Button.sizes.height;
            this.add( button );
        }
    }
}