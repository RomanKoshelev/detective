module Crimenuts.View.Process {

    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor( game: Phaser.Game, position: Phaser.Point, model: ProcessModel, controller: IProcessController ) {
            super( game );
            this.position = position;
            this.controller = controller;
            this.createAnswers();
            this.createAutoAnswerButton();
            this.updateModel( model );
        }

        updateModel( model: ProcessModel ): void {
            this.processId = model.Id;
            this.updateAnswers( model.Answers );
        }

        private answerSheet: TextLabel;
        private controller: IProcessController;
        private processId: string;

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

        private createAutoAnswerButton() {
            var button = new RoundedRectangleDecor(
                new TextDecor(
                    new Button(
                        this.game, () => this.onAutoAnswer(), this, Settings.UserInterface.Button.width, Settings.UserInterface.Button.height ),
                    "Auto", Settings.UserInterface.Button.textColor, Settings.UserInterface.Button.fontSize ),
                Settings.UserInterface.Button.fillColor, Settings.UserInterface.Button.lineColor, Settings.UserInterface.Button.lineWidth );

            button.position.set( 580, 20 );
            this.add( button );
        }

        private onAutoAnswer() {
            this.controller.autoAnswer( this.processId );
        }

        private updateAnswers( answers: AnswerModel[] ) {
            var text = "";
            var i = 1;
            var n = answers.length;

            answers.forEach( a => {
                text += `${i++}.     ${a.Agent} — `;
                text += a.IsValid ? `${a.Subject} is ` : "";
                text += a.Message;
                text += i <= n ? "\n" : "";
            } );

            this.answerSheet.setText( text );
        }
    }
}