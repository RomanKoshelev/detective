module Crimenuts {
    export interface IProcessObserver {
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessAnswersUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
    }
}