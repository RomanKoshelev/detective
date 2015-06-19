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
                //this.view.getDisplayObject().visible = false;
            }

            // Fields
            private view: IDevtoolsView;
        }
}