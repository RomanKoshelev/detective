/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Managers/ProcessManager.ts" />
module Crimenuts {
    import ProcessView = View.Process.ProcessView;

    export class ProcessState extends Phaser.State implements IProcessDirector {

        // IProcessDirector
        getActualModel(): ProcessModel { return this.model; }

        // Phaser.State
        preload() {
            Assets.Sprites.load( Settings.Assets.Sprites.transparent );
        }

        create() {
            this.createManager();
            this.loadModelCreateView();
            this.subscribeEvents();
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

        private loadModelCreateView( callback: Function=null ) {
            this.controller.getProcess( this.processId ).done( ( model: ProcessModel ) => {
                this.model = model;
                if( callback != null ) callback();
                this.createView( model );
            } );
        }

        private createView( model: ProcessModel ) {
            this.view = new ProcessView( this, this.controller, this.observer, model );
        }

        private destroyView() {
            this.view.destroy( true );
        }

        // Events
        private subscribeEvents() {
            this.observer.onProcessesReset.add( this.onProcessesReset, this );
            this.observer.onProcessAnswersUpdated.add( this.onProcessAnswersUpdated, this );
        }

        private onProcessesReset() {
            this.loadModelCreateView( () => this.destroyView() );
        }

        private onProcessAnswersUpdated( processId: string, answerModels: AnswerModel[] ) {
            if( processId === this.processId ) {
                this.model.Answers = answerModels;
                this.view.onUpdateProcess( this.model );
            }
        }

    }
}