/// <reference path="../../../UserInterface/Buttons/ButtonsHolder.ts" />
module Crimenuts.View.Process {
    export class MemberDialogButtons extends ButtonsHolder {

        // Ctor
        constructor( director: IProcessDirector, processId: string, memberId: number ) {
            super( app.game );
            this.position.x = Settings.UserInterface.Button.leftAlign;
            this.bottom = Settings.Process.Members.Dialog.Buttons.bottom;
            this.createButtons( director, processId, memberId );
        }

        // Create
        private createButtons( director: IProcessDirector, processId: string, memberId: number ) {

            var annotation = this.getAnnotationCode( director, memberId );

            this.createButtonAtBottom( new AutoAnswerCommand( director, processId ), app.uiFactory.makeOptionalButton, 2 );
            this.createButtonAtBottom( new MemberAnnotateCommand( director, processId, memberId, annotation ), app.uiFactory.makeOptionalButton, 1 );

            this.createButtonAtBottom( new MemberEarlyArrestCommand( director, processId, memberId ), app.uiFactory.makeMainButton, 0 );
            this.createButtonAtBottom( new MemberArrestCommand( director, processId, memberId ), app.uiFactory.makeMainButton, 0 );
            this.createButtonAtBottom( new ContinueCommand( director, processId ), app.uiFactory.makeMainButton, 0 );
        }

        // Utils
        getAnnotationCode( processDirector: IProcessDirector, memberId: number ): AnswerCode {
            var curAnnotation = AnswerCode[ processDirector.getProcessModel().Members[ memberId ].Annotation ];
            var newAnnotation = curAnnotation === AnswerCode.Murderer
                ? AnswerCode.Innocent
                : curAnnotation === AnswerCode.Innocent
                ? AnswerCode.Unknown
                : AnswerCode.Murderer;

            return newAnnotation;
        }
    }
}