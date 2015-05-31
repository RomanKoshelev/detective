module Crimenuts {
    export class ServerAdapter implements IGameHubServer, IGameHubClient, IServerObserver {

        constructor() {
            this.init();
        }

        // --------------------------------------------------------[]
        // IGameHubServer
        getPlayerId(): JQueryPromise<string> {
             return this.server.getPlayerId();
        }

        getProcess(): JQueryPromise<ProcessModel> {
            return this.server.getProcess("11");
        }

        update(): JQueryPromise<void> {
            return this.server.update();
        }

        // --------------------------------------------------------[]
        // IServerObserver
        onServerStarted = new Phaser.Signal();
        onProcessUpdated = new Phaser.Signal();
        onTickCountUpdated = new Phaser.Signal();

        // --------------------------------------------------------[]
        // IGameHubClient
        tickCountUpdated( count: number ) {
            this.onTickCountUpdated.dispatch( count );
        }

        processUpdated( model: ProcessModel ): void {
            this.onProcessUpdated.dispatch( model );
        }

        // --------------------------------------------------------[]
        // Fields
        private server = $.connection.gameHub.server;
        private client = $.connection.gameHub.client;

        // --------------------------------------------------------[]
        // Utils
        private init() {
            this.setupClientCallbacks();
            this.startHub();
        }

        private startHub() {
            $.connection.hub.start().done( () => { this.onServerStarted.dispatch() } );
        }

        private setupClientCallbacks() {
            this.client.tickCountUpdated = ( count: number ) => { this.tickCountUpdated( count ); };
            this.client.processUpdated = ( model: ProcessModel ) => { this.processUpdated( model ); };
        }
    }
}