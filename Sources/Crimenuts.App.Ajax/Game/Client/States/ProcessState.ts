/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Managers/ProcessManager.ts" />
module Crimenuts {
    import ProcessView = View.Process.ProcessView;

    export class ProcessState extends Phaser.State {

        preload() {
            Assets.Sprites.load( Settings.Assets.Sprites.transparent );
        }

        create() {
            this.createManager();
            this.controller.getProcess( this.processId ).done( ( model: ProcessModel ) => {
                this.model = model;
                this.createView( model );
            });
        }

        private processId = Settings.Default.Process.testId;
        private controller: IProcessController;
        private observer: IProcessObserver;
        private model: ProcessModel;
        private view: ProcessView;

        private createManager() {
            var manager = new ProcessManager( app.server, app.server );
            this.controller = manager;
            this.observer = manager;
        }

        private createView( model: ProcessModel ) {
            this.view = new ProcessView( this.game, this.controller, this.observer, model );
        }
    }
}