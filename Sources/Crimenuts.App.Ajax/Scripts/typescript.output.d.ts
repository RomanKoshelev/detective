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
        module InfoBar {
            var position: Phaser.Point;
            var width: number;
            var height: number;
            var fontSize: number;
            var color: string;
            var bgColor: number;
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
declare module Crimenuts.View.Process {
    class ProcessView extends Phaser.Group {
        constructor(game: Phaser.Game, model: ProcessModel);
        updateModel(model: ProcessModel): void;
        updateTickCount(count: number): void;
        private screen;
        private members;
        private stateBar;
        private infoBar;
        private createStateBar();
        private createInfoBar();
        private createMembers(model);
        private createUi();
    }
}
declare module Crimenuts {
    class ProcessController extends Phaser.State {
        create(): void;
        private model;
        private view;
        private subscribeEvents(server);
        private onProcessUpdated(model);
        private onTickCountUpdated(count);
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
        private startHub();
        private setupClientCallbacks();
        tickCountUpdated(count: number): void;
        processUpdated(model: ProcessModel): void;
    }
}
declare module Crimenuts {
    class Size {
        width: number;
        height: number;
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
declare module Crimenuts.View.Process {
    class InfoBar extends Phaser.Group {
        constructor(game: Phaser.Game);
        private textLabel;
        private createTextLabel(game);
        setInfo(day: number, victim: string, arrested: string, murdererNum: number): void;
    }
}
declare module Crimenuts.View.Process {
    class StateBar extends Phaser.Group {
        constructor(game: Phaser.Game);
        private textLabel;
        private createTextLabel(game);
        setState(state: string): void;
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
    class UiScreen extends Phaser.Group {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor(game: Phaser.Game);
        setBottomText(text: string): void;
        setCaseId(caseId: string): void;
    }
}
