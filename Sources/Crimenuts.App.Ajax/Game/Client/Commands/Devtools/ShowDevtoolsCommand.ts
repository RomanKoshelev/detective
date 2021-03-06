﻿/// <reference path="../Command.ts" />
module Crimenuts {
    export class ShowDevtoolsCommand extends Command {
        constructor() {
            super( "Tools" );
            this.callback = this.execute;
            this.context = this;
        }

        execute() {
            var view = app.devtools.getView().getDisplayObject();
            view.visible = ! view.visible;
        }
    }
}