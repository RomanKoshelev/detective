/// <reference path="../Managers/Devtools/DevtoolsManager.ts" />

module Crimenuts {
    export class Application {

        game: Phaser.Game;
        server: ServerAdapter;
        uiFactory: IUIFactory;
        devtools: IDevtoolsDirector;

        constructor() {
            this.server = new ServerAdapter();
            this.server.onServerStarted.addOnce( this.onServerStarted, this );
            this.uiFactory = new DefaultUIFactory();
        }

        onProcessStateViewCreated( view: IStateView ) {
            this.devtools = new DevtoolsManager();
            var devView = this.devtools.getView();
            view.getRootGroup().add( devView, true );
        }

        // Create
        private onServerStarted() {
            var size = this.getGameScreenSize();
            this.createGame( size.width, size.height );
        }

        private createGame( width: number, height: number ) {
            this.game = new Phaser.Game( width, height, Phaser.AUTO, "crimenuts-playground", { create: Application.onGameCreated } );
        }

        static onGameCreated() {
            app.game.state.add( "Process", ProcessState );
            app.game.state.start( "Process" );
        }

        // Utils
        private getGameScreenSize(): Size {
            return {
                width: Settings.Game.width,
                height: Settings.Game.height
            };
        }
    }

    export var app: Application;

    export function initApp() {
        app = new Application();
    }
}

window.onload = () => {
    Crimenuts.initApp();
};