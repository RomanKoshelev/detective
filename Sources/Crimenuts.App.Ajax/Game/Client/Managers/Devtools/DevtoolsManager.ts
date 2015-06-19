/// <reference path="../../Views/Tools/DevtoolsView.ts" />

module Crimenuts {
    export class DevtoolsManager
        implements IDevtoolsDirector {//}, IDevtoolsController {

            // IDevtoolsDirector
            getView(): IDevtoolsView {
                return this.view;
            }

            // Ctor
            constructor() {
                this.view = new DevtoolsView( this );
                app.game.world.add( this.view );
                this.view.getDisplayObject().visible = false;
            }

            // Fields
            private view: IDevtoolsView;
        }
}