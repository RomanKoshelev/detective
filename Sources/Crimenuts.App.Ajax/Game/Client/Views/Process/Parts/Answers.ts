module Crimenuts.View.Process {
    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor(
            answers: AnswerModel[],
            cmdAutoAnswer: Command
        ) {
            super( app.game );
            this.position = Settings.Process.Answers.position.clone();
            this.createAnswers();
            this.createButtons( cmdAutoAnswer );
            this.updateAnswers( answers );
        }

        onProcessUpdated( director: IProcessDirector ): void {
            var answers = director.getProcessModel().Answers;
            this.updateAnswers( answers );
        }

        private answerSheet: TextLabel;
        private controller: IProcessController;
        private processId: string;

        private createAnswers() {
            this.answerSheet = new TextLabel(
                Settings.Process.Answers.width,
                Settings.Process.Answers.height,
                Settings.Default.Font.face,
                Settings.Process.Answers.Answer.fontSize,
                Settings.Process.Answers.Answer.Color.regular,
                Settings.Process.Answers.bgColor
            );
            this.answerSheet.alignMiddle();
            this.add( this.answerSheet );
        }

        private updateAnswers( answers: AnswerModel[] ) {
            var text = "";
            var i = 1;
            var n = answers.length;

            answers.forEach( a => {
                text += `${i++}.     ${a.AgentName} — `;
                text += a.IsValid ? `${a.SubjectName} is ` : "";
                text += a.AnswerText;
                text += i <= n ? "\n" : "";
            } );

            this.answerSheet.setText( text );
        }

        createButtons( cmdAutoAnswer: Command ) {
            this.createButton( cmdAutoAnswer, Settings.Process.Answers.Buttons.Auto.position );
        }

        private createButton( command: Command, position: Phaser.Point ) {
            this.add( app.uiFactory.makeDefaultButton( command, position ) );
        }
    }
}