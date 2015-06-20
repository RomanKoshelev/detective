module Crimenuts.View.Process {
    export class Board extends Phaser.Group implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
            this.answers.onProcessUpdated( director );
            this.status.onProcessUpdated( director );
        }

        // Ctor
        constructor(
            answerModels: AnswerModel[],
            cmdAutoAnswer: ICommand,
            cmdContinue: ICommand
        ) {
            super( app.game );
            this.position = Settings.Process.Board.position.clone();
            this.createFrameDecoration();
            this.createStatus();
            this.createAnswers( answerModels );
            this.createButtons( cmdAutoAnswer, cmdContinue );
        }

        // Fields
        private answers: IProcessViewPart;
        private status: IProcessViewPart;

        // Create
        private createStatus() {
            this.status = new InfoBar();
            this.add( this.status );
        }

        private createFrameDecoration() {
            this.add(
                new RectangleDecor(
                    new BracketDecor(
                        new Decorable(
                            Settings.UserInterface.Bracket.width,
                            Settings.Process.Board.height
                        ),
                        Settings.UserInterface.Bracket.lineColor,
                        Settings.UserInterface.Bracket.lineWidth
                    ),
                    Settings.UserInterface.Bracket.bgColor,
                    Settings.Color.transparent,
                    0
                )
            );
        }

        private createAnswers( answerModels: AnswerModel[] ) {
            this.answers = new BoardAnswers( answerModels );
            this.add( this.answers );
        }

        private createButtons( cmdAutoAnswer: ICommand, cmdContinue: ICommand ) {
            this.createButton( cmdAutoAnswer, Settings.Process.Board.Buttons.Auto.position );
            this.createButton( cmdContinue, Settings.Process.Board.Buttons.Continue.position );
        }

        private createButton( command: Command, position: Phaser.Point ) {
            this.add( app.uiFactory.makeDefaultButton( command, position ) );
        }
    }
}