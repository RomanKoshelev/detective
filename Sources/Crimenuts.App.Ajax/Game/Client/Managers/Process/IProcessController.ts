module Crimenuts {
    export interface IProcessController {
        currentMemberChanged( memberId: number );
        memberIdToNumber( memberId: number ): number;
        onCurrentMemberChanged: Phaser.Signal;

        getProcess( processId: string ): JQueryPromise<ProcessModel>;
        autoAnswer( processId: string ): JQueryPromise<void>;
        arrest( processId: string, memberId: number ): JQueryPromise<void>;
        continue( processId: string ): JQueryPromise<void>;
        earlyArrest( processId: string, memberId: number );
    }
}