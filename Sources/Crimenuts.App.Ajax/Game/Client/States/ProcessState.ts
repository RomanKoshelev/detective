/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Controllers/ProcessController.ts" />
module Crimenuts {
    import ProcessView = View.Process.ProcessView;

    export class ProcessState extends Phaser.State {

        preload() {
            Assets.Sprites.load( Settings.Assets.Sprites.transparent );
        }

        create() {
            this.createController();
            this.controller.getProcess( this.processId ).done( ( model: ProcessModel ) => {
                this.model = model;
                this.createView( model );
            });
        }

        private processId = Settings.Default.Process.testId;
        private controller: IProcessController;
        private model: ProcessModel;
        private view: ProcessView;

        private createController() {
            this.controller = new ProcessController( app.server, app.server );
        }

        private createView( model: ProcessModel ) {
            this.view = new ProcessView( this.game, this.controller, model );
        }
    }
}