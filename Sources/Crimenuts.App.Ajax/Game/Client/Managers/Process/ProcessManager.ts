module Crimenuts {
    export class ProcessManager implements IProcessController, IProcessObserver {

        // IProcessController Actions
        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
        }

        continue( processId: string ): JQueryPromise<void> {
            return this.server.continue( processId );
        }

        autoAnswer( processId: string ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        arrest( processId: string, memberId: number ): JQueryPromise<void> {
            return this.server.arrest( processId, this.memberIdToNumber(memberId) );
        }

        earlyArrest( processId: string, memberId: number ): JQueryPromise<void> {
            return this.server.earlyArrest( processId, this.memberIdToNumber(memberId) );
        }

        annotate( processId: string, memberId: number, note: AnswerCode ) {
            return this.server.annotate( processId, this.memberIdToNumber(memberId), AnswerCode[note] );
        }

        // IProcessController Events
        currentMemberChanged( memberId: number ) { 
            this.onCurrentMemberChanged.dispatch( memberId );
        }

        // IProcessController Utils
        memberIdToNumber( memberId: number ): number {
            var memberNumber: number;
            memberNumber = memberId;
            ++memberNumber;
            return memberNumber;
        }


        // IProcessObserver
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
        onCurrentMemberChanged: Phaser.Signal;

        // Ctor
        constructor( server: IGameHubServer, observer: IServerObserver ) {
            this.server = server;

            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
            this.onProcessesReset = observer.onProcessesReset;
            this.onCurrentMemberChanged = new Phaser.Signal();
        }

        // Fields
        private server: IGameHubServer;
        private process: JQueryPromise<ProcessModel>;
    }
}