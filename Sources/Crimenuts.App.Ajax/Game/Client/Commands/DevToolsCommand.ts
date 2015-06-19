/// <reference path="./Command.ts" />
module Crimenuts {
    export class DevtoolsCommand extends Command {
        constructor() {
            super( "Tools" );
            this.callback = this.execute;
            this.context = this;
        }

        execute() {
            app.uiFactory.makeDefaultButton( Command.nothing );
            var devView = app.devtools.getView().getDisplayObject();
            devView.visible = true;
            app.game.world.bringToTop( devView );
        }
    }
}