module Crimenuts.View.Process {

    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor( game: Phaser.Game, position: Phaser.Point, model: ProcessModel ) {
            super( game );
            this.position = position;
            this.createAnswers();
            this.updateAnswers( model.Answers );
        }

        updateModel( model: ProcessModel ): void {
            this.updateAnswers( model.Answers );
        }


        private answerSheet: TextLabel;

        private createAnswers() {
            this.answerSheet = new TextLabel(
                this.game,
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

            answers.forEach(a => {
                text += `${i++}.     ${a.Agent} — `;
                text += a.IsValid? `${a.Subject} is `:"";
                text += a.Message;
                text += i<=n?"\n":"";
            });

            this.answerSheet.setText( text );
        }
    }
}