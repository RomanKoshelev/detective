module Crimenuts {
    export interface ISignalSource {
        getSignals(): { [ key: string ]: Phaser.Signal };
    }
}