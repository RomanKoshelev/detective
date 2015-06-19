/// <reference path="../Command.ts" />
module Crimenuts {
    export class ShowUserActionsCommand extends Command {
        constructor(textArea: ITextArea) {
            super( "User action" );
            this.callback = this.execute;
            this.context = this;
            this.textArea = textArea;
        }

        private textArea : ITextArea;
        private execute() {
            this.textArea.setText("var view = app.devtools.getView().getDisplayObject();");
        }
    }
}