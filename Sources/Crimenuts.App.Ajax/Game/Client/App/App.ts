module Crimenuts {
    export class App {

        game: Phaser.Game;
        server: ServerAdapter;
        uiFactory: IUIFactory;
        tickCount: Number;

        constructor() {
            this.server = new ServerAdapter();
            this.server.onServerStarted.addOnce( this.init, this );
            this.server.onTickCountUpdated.add( this.onTickCountUpdated, this );
            this.uiFactory = new DefaultUIFactory();
        }

        onGameCreate() {
            this.game.state.add( "Process", ProcessState, true );
        }

        private init() {
            var size = this.getGameScreenSize();
            this.createGame( size.width, size.height );
            this.handleResetLink();
        }

        private createGame( width: number, height: number ) {
            this.game = new Phaser.Game( width, height, Phaser.AUTO, "crimenuts-playground", { create: this.onGameCreate } );
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
        }

        private getGameScreenSize(): Size {
            return {
                width: Settings.Game.width,
                height: Settings.Game.height
            };
        }

        private handleResetLink() {
            document.getElementById( "crimenuts-reset-processes" ).onclick = () => {
                this.server.resetProcesses();
            }
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