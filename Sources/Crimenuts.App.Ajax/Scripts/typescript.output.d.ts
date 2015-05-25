declare module Crimenuts {
    class App {
        game: Phaser.Game;
        server: ServerAdapter;
        tickCount: Number;
        constructor();
        onGameCreate(): void;
        private init();
        private createGame(width, height);
        private onTickCountUpdated(count);
        getGameScreenSize(): Size;
    }
    var app: App;
    function initApp(): void;
}
declare module Crimenuts.Assets {
    class Sprites {
        static path: string;
        static getPersonKey(world: string, person: string, size: number): string;
        static getPersonUrl(world: string, person: string, size: number): string;
        static loadPerson(world: string, person: string, size: number): void;
    }
}
declare module Crimenuts {
    class PersonPicture extends Phaser.Image {
        constructor(game: Phaser.Game, world: string, name: string, x: number, y: number, size: number);
    }
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
declare module Crimenuts {
    class ProcessState extends Phaser.State {
        static background: string;
        membersView: ProcessMembersView;
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        private ui;
        private model;
        private tickCount;
        private onProcessUpdated(model);
        private createMembersView();
        private subscribeEvents(server);
        private onTickCountUpdated(count);
        private updateUi();
        private createUiView();
    }
}
declare module Crimenuts {
    class Size {
        width: number;
        height: number;
    }
}
declare module Crimenuts {
    class BottomBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
    }
}
declare module Crimenuts {
    class TopBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
    }
}
declare module Crimenuts {
    class ProcessMembersView {
        constructor(game: Phaser.Game, world: string, members: string[]);
        private game;
        private items;
        private world;
        private members;
        private getMembersNamesList();
        private createMembers();
        private createMembersWhenImagesLoaded();
    }
}
declare module Crimenuts {
    class UserInterfaceView {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor(game: Phaser.Game);
        private items;
        setBottomText(text: string): void;
        setCaseId(caseId: string): void;
    }
}
