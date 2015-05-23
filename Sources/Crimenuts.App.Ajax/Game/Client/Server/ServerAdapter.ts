module Crimenuts {

    export class ServerAdapter implements GameHubServer, GameHubClient {

        constructor() {
            this.init();
        }

        // --------------------------------------------------------[]
        // Server
        private server = $.connection.gameHub.server;

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
        // Client
        onStarted = new Phaser.Signal();
        onProcessUpdated = new Phaser.Signal();
        onTickCountUpdated = new Phaser.Signal();

        private client = $.connection.gameHub.client;

        private init() {
            this.setupClientCallbacks();
            this.startHub();
        }

        startHub() {
            $.connection.hub.start().done( () => { this.onStarted.dispatch() } );
        }

        private setupClientCallbacks() {
            this.client.tickCountUpdated = ( count: number ) => { this.tickCountUpdated( count ); };
            this.client.processUpdated = ( model: ProcessModel ) => { this.processUpdated( model ); };
        }

        tickCountUpdated( count: number ) {
            this.onTickCountUpdated.dispatch( count );
        }

        processUpdated( model: ProcessModel ): void {
            this.onProcessUpdated.dispatch( model );
        }
    }
}