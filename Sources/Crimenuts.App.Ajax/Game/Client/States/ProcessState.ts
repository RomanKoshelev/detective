/// <reference path="../Views/Process/ProcessView.ts"/>
module Crimenuts {
    import ProcessView = View.Process.ProcessView;

    export class ProcessState extends Phaser.State {

        preload() {
            Assets.Sprites.load( Settings.Assets.Sprites.transparent );
        }

        create() {
            this.createController();
            app.server.getProcess().done( ( model: ProcessModel ) => {
                this.model = model;
                this.view = new ProcessView( this.game, model );
                this.subscribeEvents( app.server );
            } );
        }

        private model: ProcessModel;
        private view: ProcessView;
        private controller: ProcessController;

        private subscribeEvents( server: ServerAdapter ) {
            server.onProcessUpdated.add( this.onProcessUpdated, this );
            server.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        private onProcessUpdated( model: ProcessModel ) {
            this.view.updateModel(this.model = model);
        }

        private onTickCountUpdated( count: number  ) {
            this.view.updateTickCount(count);
        }

        createController() {
            this.controller = new ProcessController(app.server);
        }
    }
}