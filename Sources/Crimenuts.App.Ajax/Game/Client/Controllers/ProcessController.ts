module Crimenuts {
    export class ProcessController implements IProcessController {

        constructor( server: IGameHubServer, observer: IServerObserver ) {
            this.server = server;

            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
        }

        // IProcessController
        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
        }

        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        
        // Fields
        private server: IGameHubServer;
    }
}