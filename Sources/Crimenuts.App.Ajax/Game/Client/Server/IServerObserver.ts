module Crimenuts {
    export interface IServerObserver {
        onServerStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
    }
}