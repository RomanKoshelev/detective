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
declare module Crimenuts.Settings {
    module Default {
        module Font {
            var face: string;
        }
    }
    module Process {
        var bgColor: string;
        module Members {
            var position: Phaser.Point;
            var numInRow: number;
            module Card {
                var width: number;
                var height: number;
                module Name {
                    var height: number;
                    var fontSize: number;
                    var color: string;
                    var bgColor: number;
                }
            }
        }
        module StateBar {
            var position: Phaser.Point;
            var width: number;
            var height: number;
            var fontSize: number;
            var color: string;
            var bgColor: number;
        }
    }
}
declare module Crimenuts {
    class BottomBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
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
    class ProcessStateBar extends Phaser.Group {
        constructor(game: Phaser.Game);
        private textLabel;
        private createTextLabel(game);
        setText(text: string): void;
    }
}
declare module Crimenuts {
    class TextLabel extends Phaser.Graphics {
        private label;
        private fontSize;
        constructor(game: Phaser.Game, width: number, height: number, fontSize: number, color: string, bgcolor: number, fontFace?: string);
        setText(text: string): void;
        alignLeft(): void;
        alignCenter(): void;
        alignTop(): void;
        alignMiddle(): void;
        setFontBold(): void;
        private createLabel(fontFace, fontSize, color);
        private createBackground(width, height, bgcolor);
    }
}
declare module Crimenuts {
    class TopBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor(game: Phaser.Game);
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
        private model;
        private tickCount;
        private ui;
        private members;
        private stateBar;
        private createStateBar();
        private createMembers();
        private createUi();
        private updateUi();
        private subscribeEvents(server);
        private onTickCountUpdated(count);
        private onProcessUpdated(model);
    }
}
declare module Crimenuts {
    class Size {
        width: number;
        height: number;
    }
}
declare module Crimenuts {
    class MemberCard extends Phaser.Group {
        static nameHeight: number;
        static nameFontSize: number;
        static nameColor: string;
        static nameBgColor: number;
        constructor(game: Phaser.Game, world: string, member: string, x: number, y: number, w: number, h: number);
        private picture;
        private nameLabel;
        private createPicture(game, world, name, w, h);
        private createNameBox(game, name, width, height);
    }
}
declare module Crimenuts {
    class Members extends Phaser.Group {
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
