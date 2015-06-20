module Crimenuts.View.Process {
    export class BoardAnswers extends Phaser.Group implements IProcessViewPart {

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
            this.updateAnswers( director.getProcessModel().Answers );
        }

        // Ctor
        constructor( answers: AnswerModel[] ) {
            super( app.game );
            this.position = Settings.Process.Board.Answers.position.clone();
            this.createAnswers();
            this.updateAnswers( answers );
        }

        // Fields
        private answerSheet: TextLabel;

        // Create
        private createAnswers() {
            this.answerSheet = new TextLabel(
                Settings.Process.Board.Answers.width,
                Settings.Process.Board.Answers.height,
                Settings.Default.Font.face,
                Settings.Process.Board.Answers.Answer.fontSize,
                Settings.Process.Board.Answers.Answer.Colors.regular,
                Settings.Process.Board.Answers.bgColor
            );
            this.answerSheet.position.set( Settings.Process.Board.Answers.Answer.left, Settings.Process.Board.Answers.Answer.top );
            this.answerSheet.alignMiddle();
            this.add( this.answerSheet );
        }

        // Update
        private updateAnswers( answers: AnswerModel[] ) {
            var text = "";
            var i = 1;
            var n = answers.length;

            answers.forEach( a => {
                text += `• ${a.AgentName} — `;
                text += a.IsValid ? `${a.SubjectName} is ` : "";
                text += a.AnswerText;
                text += i <= n ? "\n" : "";
            } );

            this.answerSheet.setText( text );
        }
    }
}