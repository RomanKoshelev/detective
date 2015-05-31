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

        autoAnswer( processId: string ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        resetProcesses(): JQueryPromise<void> {
            return this.server.resetProcesses();
        }

        // --------------------------------------------------------[]
        // IServerObserver
        onServerStarted = new Phaser.Signal();
        onProcessUpdated = new Phaser.Signal();
        onTickCountUpdated = new Phaser.Signal();
        onProcessAnswersUpdated = new Phaser.Signal();
        onProcessesReset = new Phaser.Signal();

        // --------------------------------------------------------[]
        // IGameHubClient
        tickCountUpdated( count: number ) {
            this.onTickCountUpdated.dispatch( count );
        }

        processUpdated( model: ProcessModel ): void {
            this.onProcessUpdated.dispatch( model );
        }

        processAnswersUpdated( processId: string, answerModels: AnswerModel[] ): void {
            this.onProcessAnswersUpdated.dispatch( processId, answerModels );
        }
        processesReset(): void {
            this.onProcessesReset.dispatch();
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
            this.client.processAnswersUpdated = ( id: string, answers: AnswerModel[] ) => { this.processAnswersUpdated( id, answers ); };
            this.client.processesReset = () => { this.processesReset(); };
        }

        private startHub() {
            $.connection.hub.start().done( () => { this.onServerStarted.dispatch() } );
        }

    }
}