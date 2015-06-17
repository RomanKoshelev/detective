/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Managers/ProcessManager.ts" />
module Crimenuts {
    import ProcessView = View.Process.ProcessView;

    export class ProcessState extends Phaser.State implements IProcessDirector {

        // Ctor
        constructor() {
            super();
            this.createManager();
            this.subscribeEvents();
        }

        // IProcessDirector
        getProcessModel(): ProcessModel { return this.model; }

        // Phaser.State
        preload() {
            Assets.Sprites.load( Settings.Assets.Sprites.transparent );
        }

        create() {
            this.loadModelThen(() => {
                this.createView();
            } );
        }

        // Fields
        private processId = Settings.Default.Process.testId;
        private controller: IProcessController;
        private observer: IProcessObserver;
        private model: ProcessModel;
        private view: ProcessView;

        // Parts
        private createManager() {
            var manager = new ProcessManager( app.server, app.server );
            this.controller = manager;
            this.observer = manager;
        }

        private loadModelThen( callback: Function ) {
            this.controller.getProcess( this.processId ).done( ( model: ProcessModel ) => {
                this.model = model;
                callback();
            } );
        }

        private createView() {
            this.view = new ProcessView( this, this.controller, this.observer, this.model );
        }

        private destroyView() {
            this.view.destroy( true );
        }

        // Events
        private subscribeEvents() {
            this.observer.onProcessesReset.add( this.onProcessesReset, this );
            this.observer.onProcessUpdated.add( this.onProcessUpdated, this );
        }

        private onProcessesReset() {
            this.loadModelThen( () => {
                this.destroyView();
                this.createView();
            } );
        }

        private onProcessUpdated( model: ProcessModel ) {
            if( model.Id === this.processId ) {
                this.model = model;
                this.view.onProcessUpdated( this );
            }
        }
    }
}