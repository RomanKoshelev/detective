module Crimenuts {
    export class ProcessState extends Phaser.State {

        static background = "#000000";
        session: SessionManager;
        ui: UserInterface;

        constructor() {
            super();
        }

        init() {
            this.game.stage.backgroundColor = ProcessState.background;
        }

        preload() {
        }

        create() {
            this.session = new SessionManager( this.game );
            this.ui = new UserInterface( this.game );
        }

        update() {
            //this.game.debug.text( `${this.session.id} [${app.tickCount}]`, 10, 100 );
        }

        private preloadSprites( suit: Suit ) {
        }
    }
}