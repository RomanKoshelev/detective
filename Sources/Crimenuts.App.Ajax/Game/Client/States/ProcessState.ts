module Crimenuts {
    export class ProcessState extends Phaser.State {

        static background = "#000000";//"#004400";
        session: SessionManager;

        constructor() {
            super();
        }

        init() {
            this.game.stage.backgroundColor = ProcessState.background;
        }

        preload() {
            //this.preloadSprites( Suit.Blue );
        }

        create() {
            this.session = new SessionManager( this.game );
        }

        update() {
            this.game.debug.text( `${this.session.id} [${app.tickCount}]`, 10, 20 );
        }

        private preloadSprites( suit: Suit ) {
            // Assets.Sprites.load( suit, Assets.Type.House );
        }
    }
}