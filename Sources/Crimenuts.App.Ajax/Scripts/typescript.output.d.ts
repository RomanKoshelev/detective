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
        constructor(game: Phaser.Game, world: string, name: string, x: number, y: number, width: number);
        private imageKey;
        private getLoader(world, name, width);
        private onLoadComplete();
    }
}
declare module Crimenuts {
    class TextBox extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game, text: string, x: number, y: number, w: number, h: number, fs: number);
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
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        static background: string;
        static membersPosition: Phaser.Point;
        private ui;
        private members;
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
    class MemberCard extends Phaser.Group {
        static nameHeight: any;
        static nameFontSize: any;
        constructor(game: Phaser.Game, world: string, member: string, x: number, y: number, width: number, height: number);
        private picture;
        private nameBox;
        private createPicture(game, world, name, width);
        private createNameBox(game, name, width, height);
    }
}
declare module Crimenuts {
    class ProcessMembers extends Phaser.Group {
        constructor(game: Phaser.Game, world: string, members: string[]);
        private world;
        private model;
        static memberWidth: number;
        static memberHeight: number;
        static memberNumInRow: number;
        private createMembers();
        private calcPersonCardPosition(i, w, h);
    }
}
declare module Crimenuts {
    class UserInterface extends Phaser.Group {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor(game: Phaser.Game);
        setBottomText(text: string): void;
        setCaseId(caseId: string): void;
    }
}
