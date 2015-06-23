/// <reference path="./MemberCommand.ts" />
module Crimenuts {
    export class MemberAnnotateCommand extends MemberCommand {

        constructor( director: IProcessDirector, processId: string, memberId: number ) {
            super( "Annotate", director, processId, UserActionCode.None, memberId );
            this.updateAnnotationCode();
        }

        update() {
            this.updateAnnotationCode();
        }

        // Protected
        protected doUpdateAvailability(): boolean {
            this.updateAnnotationCode();
            return this.getMemberModel().IsActive;
        }

        protected doExecute() {
            //this.code = AnswerCode.Murderer;
            this.getController().annotate( this.processId, this.memberId, this.code );
        }

        // Private
        private code: AnswerCode;

        private updateAnnotationCode() {
            this.code = this.getAnnotationCode();
        }

        private getAnnotationCode(): AnswerCode {
            var curAnnotation = AnswerCode[this.getMemberModel().Annotation];
            var newAnnotation = curAnnotation === AnswerCode.Murderer
                ? AnswerCode.Innocent
                : curAnnotation === AnswerCode.Innocent
                ? AnswerCode.Unknown
                : AnswerCode.Murderer;
            return newAnnotation;
        }
    }
}