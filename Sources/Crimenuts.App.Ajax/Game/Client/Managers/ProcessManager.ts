module Crimenuts {
    export class ProcessManager implements IProcessController, IProcessObserver {

        constructor( server: IGameHubServer, observer: IServerObserver ) {
            this.server = server;

            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
            this.onProcessAnswersUpdated = observer.onProcessAnswersUpdated;
        }

        // IProcessController
        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
        }

        autoAnswer( processId: string ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        // IProcessObserver
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessAnswersUpdated: Phaser.Signal;
        
        // Fields
        private server: IGameHubServer;
    }
}