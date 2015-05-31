module Crimenuts {
    export interface IProcessController {
        getProcess( processId: string ) : JQueryPromise<ProcessModel>;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
    }
}