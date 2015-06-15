﻿module Crimenuts.View.Process {
    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor( 
            position: Phaser.Point,
            controller: IProcessController,
//todo:> remove observer
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            super( app.game );
            this.position = position;
            this.controller = controller;
            this.createAnswers();
            this.createButtons();
            this.onUpdateProcess( model );
//            this.subscribe( observer );
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
                text += `${i++}.     ${a.Agent} — `;
                text += a.IsValid ? `${a.Subject} is ` : "";
                text += a.Message;
                text += i <= n ? "\n" : "";
            } );

            this.answerSheet.setText( text );
        }

/*
        private onProcessAnswersUpdated( processId: string, answerModels: AnswerModel[] ) {
            if( processId === this.processId ) {
                this.updateAnswers( answerModels );
            }
        }

        private subscribe( observer: IProcessObserver ) {
            observer.onProcessAnswersUpdated.add( this.onProcessAnswersUpdated, this );
        }
*/

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