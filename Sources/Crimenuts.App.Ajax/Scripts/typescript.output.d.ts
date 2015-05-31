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
        static load(key: string): void;
        static getUrl(key: string): string;
    }
}
declare module Crimenuts.Settings {
    module Default {
        module Font {
            var face: string;
            var size: number;
            var color: string;
            var bgColor: number;
        }
        module RoundedRectangle {
            var radiusRate: number;
        }
        module Shape {
            var lineWidth: number;
            var fillColor: number;
            var lineColor: number;
        }
        module Process {
            var testId: string;
        }
    }
    module Game {
        var width: number;
        var height: number;
    }
    module Assets {
        module Sprites {
            var transparent: string;
        }
    }
    module BgColor {
        var black: number;
        var white: number;
        var transparent: number;
    }
    module UserInterface {
        module Button {
            var width: number;
            var height: number;
            var sprite: string;
            var fontSize: number;
            var fillColor: number;
            var lineColor: number;
            var textColor: string;
            var lineWidth: number;
        }
    }
    module Process {
        var bgColor: string;
        module Members {
            var position: Phaser.Point;
            var numInRow: number;
            module Member {
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
        module Answers {
            var position: Phaser.Point;
            var width: number;
            var height: number;
            var bgColor: number;
            module Answer {
                var fontSize: number;
                module Color {
                    var regular: string;
                }
            }
        }
        module Bars {
            var textColor: string;
            var bgColor: number;
            module InfoBar {
                var position: Phaser.Point;
                var width: number;
                var height: number;
                var fontSize: number;
                var textColor: string;
                var bgColor: number;
            }
            module StateBar {
                var position: Phaser.Point;
                var width: number;
                var height: number;
                var fontSize: number;
                var textColor: string;
                var bgColor: number;
            }
        }
    }
}
declare module Crimenuts {
    interface IProcessController {
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
    }
}
declare module Crimenuts {
    class ProcessController implements IProcessController {
        constructor(server: IGameHubServer, observer: IServerObserver);
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        private server;
    }
}
declare module Crimenuts {
    interface IServerObserver {
        onServerStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
    }
}
declare module Crimenuts {
    class ServerAdapter implements IGameHubServer, IGameHubClient, IServerObserver {
        constructor();
        getPlayerId(): JQueryPromise<string>;
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        update(): JQueryPromise<void>;
        onServerStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        tickCountUpdated(count: number): void;
        processUpdated(model: ProcessModel): void;
        private server;
        private client;
        private setupClientCallbacks();
        private startHub();
    }
}
declare module Crimenuts.View.Process {
    class ProcessView extends Phaser.Group {
        constructor(game: Phaser.Game, controller: IProcessController, model: ProcessModel);
        private parts;
        private ticks;
        private controller;
        private createParts(model);
        private addPart(part);
        private updateParts(model);
        private subscribeEvents();
        private onProcessUpdated(model);
        private onTickCountUpdated(count);
    }
}
declare module Crimenuts {
    class ProcessState extends Phaser.State {
        preload(): void;
        create(): void;
        private processId;
        private controller;
        private model;
        private view;
        private createController();
        private createView(model);
    }
}
declare module Crimenuts {
    class Size {
        width: number;
        height: number;
        constructor(width?: number, height?: number);
    }
}
declare module Crimenuts {
    class Button extends Phaser.Button implements IDecorable {
        constructor(game: Phaser.Game, callback?: Function, callbackContext?: any, width?: number, height?: number);
        getGame(): Phaser.Game;
        private resize(width, height);
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    interface IDecorable {
        getGame(): Phaser.Game;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class RoundedRectangleDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, fillColor?: number, lineColor?: number, lineWidth?: number);
        private component;
        getGame(): Phaser.Game;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        createRoundedRectangle(size: Size, fillColor: number, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class TextDecor extends Phaser.Group implements IDecorable {
        constructor(component: IDecorable, text: string, color?: string, fontSize?: number, fontFace?: string);
        private component;
        private textLabel;
        getGame(): Phaser.Game;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class TextLabel extends Phaser.Graphics {
        private label;
        private fontSize;
        constructor(game: Phaser.Game, width: number, height: number, fontFace?: string, fontSize?: number, color?: string, bgcolor?: number);
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
declare module Crimenuts.View.Process {
    interface ITicksViewer {
        updateTicks(count: number): any;
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
declare module Crimenuts.View.Process {
    interface IProcessViewPart {
        updateModel(model: ProcessModel): void;
    }
}
declare module Crimenuts.View.Process {
    class Answers extends Phaser.Group implements IProcessViewPart {
        constructor(game: Phaser.Game, position: Phaser.Point, model: ProcessModel);
        updateModel(model: ProcessModel): void;
        private answerSheet;
        private createAnswers();
        private createAutoAnswerButton();
        private onAutoAnswer();
        private updateAnswers(answers);
    }
}
declare module Crimenuts.View.Process {
    class Display extends Phaser.Group implements IProcessViewPart, ITicksViewer {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor(game: Phaser.Game);
        updateModel(model: ProcessModel): void;
        updateTicks(count: number): void;
        private setBottomText(text);
        private setCaseId(caseId);
    }
}
declare module Crimenuts.View.Process {
    class InfoBar extends Phaser.Group {
        constructor(game: Phaser.Game, position: Phaser.Point);
        updateModel(model: ProcessModel): void;
        private textLabel;
        private createTextLabel(game);
        private setInfo(day, victim, arrested, murdererNum);
    }
}
declare module Crimenuts.View.Process {
    class Member extends Phaser.Group {
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
declare module Crimenuts.View.Process {
    class Members extends Phaser.Group implements IProcessViewPart {
        constructor(game: Phaser.Game, position: Phaser.Point, model: ProcessModel);
        updateModel(model: ProcessModel): void;
        static memberWidth: number;
        static memberHeight: number;
        static memberNumInRow: number;
        private createMembers(world, members);
        private calcPersonCardPosition(i, w, h);
    }
}
declare module Crimenuts.View.Process {
    class StateBar extends Phaser.Group implements IProcessViewPart {
        constructor(game: Phaser.Game, position: Phaser.Point);
        updateModel(model: ProcessModel): void;
        private textLabel;
        private createTextLabel(game);
        private setState(state);
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
