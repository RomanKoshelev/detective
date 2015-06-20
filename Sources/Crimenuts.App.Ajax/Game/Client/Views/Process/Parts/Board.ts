module Crimenuts.View.Process {
    export class Board extends Phaser.Group implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
            this.answers.onProcessUpdated( director );
            this.status.onProcessUpdated( director );
        }

        // Ctor
        constructor(
            director: IProcessDirector,
            process: ProcessModel
        ) {
            super( app.game );
            this.position = Settings.Process.Board.position.clone();
            this.createDecoration();
            this.createStatus( process );
            this.createAnswers( process.Answers );
            this.createButtons( director, process.Id );
        }

        // Fields
        private answers: IProcessViewPart;
        private status: IProcessViewPart;
        private buttons: IProcessViewPart;

        // Create
        private createDecoration() {
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

        private createStatus( process: ProcessModel ) {
            this.status = new BoardStatus( process );
            this.add( this.status );
        }

        private createAnswers( answerModels: AnswerModel[] ) {
            this.answers = new BoardAnswers( answerModels );
            this.add( this.answers );
        }

        private createButtons( director: IProcessDirector, processId: string ) {
            this.buttons = new BoardButtons( director, processId );
            this.add( this.buttons );
        }
    }
}