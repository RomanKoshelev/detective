declare module Crimenuts.Assets {
    enum Type {
        Person = 0,
        World = 1,
    }
    class Sprites {
        static path: string;
        static getKey(assetType: Type): string;
        static load(assetType: Assets.Type): void;
    }
}
declare module Crimenuts {
    class UserInterfaceView {
        private items;
        constructor(game: Phaser.Game);
    }
}
declare module Crimenuts {
    class BottomBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
        preUpdate(): void;
    }
}
declare module Crimenuts {
    class TopBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
    }
}
declare module Crimenuts {
    class Size {
        width: number;
        height: number;
    }
}
declare module Crimenuts {
    class ProcessView {
        game: Phaser.Game;
        id: string;
        constructor(game: Phaser.Game, server: ServerAdapter);
        private serverUpdateInterval;
        private fromModel(model);
        private onSessionUpdated(model);
    }
}
declare module Crimenuts {
    class ProcessState extends Phaser.State {
        static background: string;
        processView: ProcessView;
        userInterfaceView: UserInterfaceView;
        server: ServerAdapter;
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        update(): void;
    }
}
declare module Crimenuts {
    class App {
        game: Phaser.Game;
        server: ServerAdapter;
        tickCount: Number;
        constructor();
        create(): void;
        private init();
        private createGame(width, height);
        private onTickCountUpdated(count);
        getGameScreenSize(): Size;
    }
    var app: App;
    function initApp(): void;
}
declare module Crimenuts {
    class ServerAdapter implements GameHubServer, GameHubClient {
        constructor();
        private server;
        getPlayerId(): JQueryPromise<string>;
        getProcess(): JQueryPromise<ProcessModel>;
        update(): JQueryPromise<void>;
        onStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        private client;
        private init();
        startHub(): void;
        private setupClientCallbacks();
        tickCountUpdated(count: number): void;
        processUpdated(model: ProcessModel): void;
    }
}
