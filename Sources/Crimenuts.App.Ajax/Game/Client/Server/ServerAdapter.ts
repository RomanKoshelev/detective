module Crimenuts {
    export class ServerAdapter implements IGameHubServer, IGameHubClient, IServerObserver {

        constructor() {
            this.setupClientCallbacks();
            this.startHub();
        }

        // --------------------------------------------------------[]
        // IGameHubServer
        getPlayerId(): JQueryPromise<string> {
            return this.server.getPlayerId();
        }

        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
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
        private setupClientCallbacks() {
            this.client.tickCountUpdated = ( count: number ) => { this.tickCountUpdated( count ); };
            this.client.processUpdated = ( model: ProcessModel ) => { this.processUpdated( model ); };
        }

        private startHub() {
            $.connection.hub.start().done( () => { this.onServerStarted.dispatch() } );
        }
    }
}