module Crimenuts.View.Process {
    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor( 
            controller: IProcessController,
            model: ProcessModel
        ) {
            super( app.game );
            this.position = Settings.Process.Answers.position.clone();
            this.controller = controller;
            this.createAnswers();
            this.createButtons();
            this.onUpdateProcess( model );
        }

        onUpdateProcess( model: ProcessModel ): void {
            this.processId = model.Id;
            this.updateAnswers( model.Answers );
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

        private cmdAutoAnswer() {
            this.controller.autoAnswer( this.processId );
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

        createButtons() {
            this.createButton(
                new Command( "Auto", this.cmdAutoAnswer, this),
                Settings.Process.Answers.Buttons.Auto.position );
        }

        private createButton( command: Command, position: Phaser.Point ) {
            this.add( app.uiFactory.makeDefaultButton( command, position ) );
        }
    }
}