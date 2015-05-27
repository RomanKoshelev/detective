﻿module Crimenuts {
    export class ProcessController extends Phaser.State {

        create() {
            app.server.getProcess().done( ( model: ProcessModel ) => {
                this.model = model;
                this.view = new ProcessView( this.game, model );
                this.subscribeEvents( app.server );
            } );
        }

        private model: ProcessModel;
        private view: ProcessView;

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
    }
}