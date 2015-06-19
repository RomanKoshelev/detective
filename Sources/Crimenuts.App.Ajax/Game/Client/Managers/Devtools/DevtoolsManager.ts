/// <reference path="../../Views/Tools/DevtoolsView.ts" />

module Crimenuts {
    export class DevtoolsManager
        implements IDevtoolsDirector, IDevtoolsController {

            // IDevtoolsDirector
            getView(): IDevtoolsView {
                return this.view;
            }

            // Ctor
            constructor() {
                this.view = new DevtoolsView( this );
                this.view.visible = false;
            }

            // Fields
            private view: DevtoolsView;
        }
}