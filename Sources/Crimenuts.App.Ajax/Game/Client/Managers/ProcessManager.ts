module Crimenuts {
    export class ProcessManager implements IProcessController, IProcessObserver {

        constructor( server: IGameHubServer, observer: IServerObserver ) {
            this.server = server;

            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
            this.onProcessesReset = observer.onProcessesReset;
            this.onCurrentMemberChanged = new Phaser.Signal();
        }

        // IProcessController
        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
        }

        autoAnswer( processId: string ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        arrest( processId: string, memberId: number ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        currentMemberChanged( memberId: number ) {
            this.onCurrentMemberChanged.dispatch( memberId );
        }

        // IProcessObserver
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
        onCurrentMemberChanged: Phaser.Signal;

        // Fields
        private server: IGameHubServer;
        private process: JQueryPromise<ProcessModel>;
    }
}