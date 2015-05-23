module Crimenuts {
    export class ProcessState extends Phaser.State {

        static background = "#000000";
        processView: ProcessView;
        userInterfaceView: UserInterfaceView;
        server: ServerAdapter;

        constructor() {
            super();
            this.server = app.server;
        }

        init() {
            this.game.stage.backgroundColor = ProcessState.background;
        }

        preload() {
        }

        create() {
            this.processView = new ProcessView( this.game, this.server );
            this.userInterfaceView = new UserInterfaceView( this.game );
        }

        update() {
            //this.game.debug.text( `${this.session.id} [${app.tickCount}]`, 10, 100 );
        }
    }
}