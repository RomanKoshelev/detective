/// <reference path="./MemberCommand.ts" />
module Crimenuts {
    export class MemberAnnotateCommand extends MemberCommand {

        constructor( director: IProcessDirector, processId: string, memberId: number, code: AnswerCode ) {
            this.code = code;
            super( "Annotate", director, processId, UserActionCode.Annotate, memberId, this.code );
            this.name = AnswerCode[this.code];
        }

        protected doExecute() {
            this.getController().annotate( this.processId, this.memberId, this.code );
        }

        private code: AnswerCode;
    }
}