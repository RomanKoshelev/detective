/// <reference path="../Command.ts" />
module Crimenuts {
    export class ShowUserActionsCommand extends Command {
        constructor( textArea: ITextArea ) {
            super( "User actions" );
            this.callback = this.execute;
            this.context = this;
            this.textArea = textArea;
        }

        private textArea: ITextArea;

        private execute() {
            var process = app.processDirector.getProcessModel();
            var text = `${process.State} User Actions:\n\n`;
            process.Actions.forEach( action => {
                var actionCode = UserActionCode[action.Type];
                if( actionCode !== UserActionCode.Ask ) {
                    text += `  ${action.Type} ( `;
                    action.Args.forEach( arg => {
                        text += `${arg} `;
                    } );
                    text += `)\n`;
                }
            } );
            this.textArea.setText( text );
        }
    }
}