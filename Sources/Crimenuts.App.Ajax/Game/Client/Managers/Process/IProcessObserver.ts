module Crimenuts {
    export interface IProcessObserver {
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
    }
}