module Crimenuts {
    export interface IProcessController {
        getProcess( processId: string ): JQueryPromise<ProcessModel>;
        autoAnswer( processId: string ): JQueryPromise<void>;
        arrest( processId: string, memberId: number ): JQueryPromise<void>;
        continue( processId: string ): JQueryPromise<void>;

        onCurrentMemberChanged: Phaser.Signal;

        currentMemberChanged( memberId: number );
    }
}