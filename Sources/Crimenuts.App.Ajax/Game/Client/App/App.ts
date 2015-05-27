module Crimenuts {
    export class App {

        game: Phaser.Game;
        server: ServerAdapter;
        tickCount: Number;

        constructor() {
            this.server = new ServerAdapter();
            this.server.onStarted.addOnce( this.init, this );
            this.server.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        onGameCreate() {
            this.game.state.add( "Process", ProcessController, true );
        }

        private init() {
            var size = this.getGameScreenSize();
            this.createGame( size.width, size.height );
        }

        private createGame( width: number, height: number ) {
            this.game = new Phaser.Game( width, height, Phaser.AUTO, "crimenuts-playground", { create: this.onGameCreate });
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
        }

        getGameScreenSize() : Size {
            return {
                width: 720,
                height: 820
            };
        }
    }

    export var app: App;

    export function initApp() {
        app = new App();
    }
}

window.onload = () => {
    Crimenuts.initApp();
};