declare module Crimenuts {
    class App {
        game: Phaser.Game;
        server: ServerAdapter;
        uiFactory: DefaultUIFactory;
        tickCount: Number;
        constructor();
        onGameCreate(): void;
        private init();
        private createGame(width, height);
        private onTickCountUpdated(count);
        private getGameScreenSize();
        private handleResetLink();
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
declare module Crimenuts {
    class ColorSet {
        constructor(fill: number, border: number, text: string);
        fill: number;
        border: number;
        text: string;
    }
}
declare module Crimenuts.Settings {
    module Game {
        var width: number;
        var height: number;
    }
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
            module White {
                module Regular {
                    var colors: ColorSet;
                }
                module Highlight {
                    var colors: ColorSet;
                }
            }
        }
        module TextLabel {
            var fontSizeToHeightRate: number;
        }
    }
    module Process {
        var bgColor: string;
        module Members {
            var left: number;
            var top: number;
            var position: Phaser.Point;
            var numInRow: number;
            var unknownMember: number;
            module Card {
                var width: number;
                var height: number;
                var footShiftRate: number;
                module Name {
                    var height: number;
                    var fontSize: number;
                    var color: string;
                    var bgColor: number;
                }
                module Answer {
                    var sizeRate: number;
                    var xRate: number;
                    var yRate: number;
                }
            }
            module Dialog {
                var left: number;
                var top: number;
                var position: Phaser.Point;
                var width: number;
                var height: number;
                var bgColor: number;
                var bracketColor: number;
                var bracketWidth: number;
                module Card {
                    var position: Phaser.Point;
                    var width: number;
                    var height: number;
                }
                module Title {
                    var position: Phaser.Point;
                    var width: number;
                    var height: number;
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
            module Buttons {
                module Auto {
                    var position: Phaser.Point;
                }
            }
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
            var left: number;
            var width: number;
            var height: number;
            module InfoBar {
                var position: Phaser.Point;
            }
        }
    }
}
declare module Crimenuts {
    class Command {
        constructor(name: string, callback?: Function, context?: any);
        name: string;
        callback: Function;
        context: any;
        static nothing: Command;
    }
}
declare module Crimenuts.View.Process {
    class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {
        static instance: IMemberDialog;
        constructor(director: IProcessDirector);
        setMember(memberId: number): void;
        onUpdateProcess(process: ProcessModel): void;
        private director;
        private controller;
        private memberId;
        private title;
        private memberCard;
        private createFrameDecoration();
        private createTitle();
        private createMemberCard();
        private getMemberModel();
    }
}
declare module Crimenuts {
    class MemberDialogCommand extends Command {
        constructor(memberId: number);
        private memberId;
        private execute();
    }
}
declare module Crimenuts {
    interface IProcessController {
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        autoAnswer(processId: string): JQueryPromise<void>;
    }
}
declare module Crimenuts {
    interface IProcessObserver {
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
    }
}
declare module Crimenuts {
    class ProcessManager implements IProcessController, IProcessObserver {
        constructor(server: IGameHubServer, observer: IServerObserver);
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        autoAnswer(processId: string): JQueryPromise<void>;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
        private server;
        process: JQueryPromise<ProcessModel>;
    }
}
declare module Crimenuts {
    interface IServerObserver {
        onServerStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
    }
}
declare module Crimenuts {
    class ServerAdapter implements IGameHubServer, IGameHubClient, IServerObserver {
        constructor();
        getPlayerId(): JQueryPromise<string>;
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        autoAnswer(processId: string): JQueryPromise<void>;
        resetProcesses(): JQueryPromise<void>;
        onServerStarted: Phaser.Signal;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
        tickCountUpdated(count: number): void;
        processUpdated(model: ProcessModel): void;
        processesReset(): void;
        private server;
        private client;
        private setupClientCallbacks();
        private startHub();
    }
}
declare module Crimenuts {
    interface IProcessDirector {
        getProcessModel(): ProcessModel;
    }
}
declare module Crimenuts.View.Process {
    class ProcessView extends Phaser.Group implements IProcessViewPart {
        constructor(director: IProcessDirector, controller: IProcessController, observer: IProcessObserver, model: ProcessModel);
        onUpdateProcess(model: ProcessModel): void;
        private parts;
        private ticks;
        private createParts(director, controller, observer, model);
        private addPart(part);
        private updateParts(model);
        private subscribeEvents(observer);
        private onTickCountUpdated(count);
    }
}
declare module Crimenuts {
    class ProcessState extends Phaser.State implements IProcessDirector {
        getProcessModel(): ProcessModel;
        preload(): void;
        create(): void;
        private processId;
        private controller;
        private observer;
        private model;
        private view;
        private createManager();
        private loadModelCreateView(callback?);
        private createView(model);
        private destroyView();
        private subscribeEvents();
        private onProcessesReset();
        private onProcessUpdated(model);
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
    class ButtonEssence extends Phaser.Button implements IDecorable, ISignalSource {
        constructor(command: Command, width: number, height: number);
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        static signalOver: string;
        static signalOut: string;
        static signalDown: string;
        static signalUp: string;
        getSignals(): {
            [key: string]: Phaser.Signal;
        };
        private resize(width, height);
    }
}
declare module Crimenuts {
    class TextButton extends Phaser.Group {
        constructor(command: Command, regularColors: ColorSet, highlightColors: ColorSet, position: Phaser.Point);
        private decors;
        private createButton(command, regularColors, highlightColors);
        private createButtonEssence(command);
        private createDecor(essence, text, colors);
        private initSignalHandlers(source, regularDecor, higlightDecor);
        private showDecor(decor);
        private setDecorMapping(source, signal, decor);
    }
}
declare module Crimenuts {
    class WhiteButton extends TextButton {
        constructor(command: Command, position?: Phaser.Point);
    }
}
declare module Crimenuts {
    class BracketDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, lineColor?: number, lineWidth?: number);
        private component;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        createBrackets(size: Size, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class Decorable extends Phaser.Sprite implements IDecorable {
        constructor(width: number, height: number);
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        private resize(width, height);
    }
}
declare module Crimenuts {
    class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor(essence: IDecorable);
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        private essence;
    }
}
declare module Crimenuts {
    interface IDecorable {
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class RectangleDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, fillColor?: number, lineColor?: number, lineWidth?: number);
        private component;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        createRectangle(size: Size, fillColor: number, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class RoundedRectangleDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, fillColor?: number, lineColor?: number, lineWidth?: number);
        private component;
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
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class DefaultUIFactory implements IUIFactory {
        makeDefaultButton(command: Command, position: Phaser.Point): any;
        makeTextLabel(width: number, height: number, color: string, bgColor: number): TextLabel;
    }
}
declare module Crimenuts {
    interface IUIFactory {
        makeDefaultButton(command: Command, position: Phaser.Point): any;
    }
}
declare module Crimenuts {
    class PersonPicture extends Phaser.Image {
        constructor(x: number, y: number, width: number, world?: string, name?: string);
        setPerson(world: string, name: string): void;
        private imageKey;
        private imageWidth;
        private getLoader(world, name, width);
        private onLoadComplete();
    }
}
declare module Crimenuts {
    class TextLabel extends Phaser.Graphics {
        private label;
        private fontSize;
        constructor(width: number, height: number, fontFace?: string, fontSize?: number, color?: string, bgcolor?: number);
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
    interface ISignalSource {
        getSignals(): {
            [key: string]: Phaser.Signal;
        };
    }
}
declare module Crimenuts {
    class BottomBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor();
    }
}
declare module Crimenuts {
    class TopBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor();
    }
}
declare module Crimenuts.View.Process {
    interface IProcessViewPart {
        onUpdateProcess(processModel: ProcessModel): void;
    }
}
declare module Crimenuts.View.Process {
    class Answers extends Phaser.Group implements IProcessViewPart {
        constructor(controller: IProcessController, model: ProcessModel);
        onUpdateProcess(model: ProcessModel): void;
        private answerSheet;
        private controller;
        private processId;
        private createAnswers();
        private cmdAutoAnswer();
        private updateAnswers(answers);
        createButtons(): void;
        private createButton(command, position);
    }
}
declare module Crimenuts.View.Process {
    class Display extends Phaser.Group implements IProcessViewPart, ITicksWidget {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor();
        onUpdateProcess(model: ProcessModel): void;
        updateTicks(count: number): void;
        private setBottomText(text);
        private setCaseId(caseId);
    }
}
declare module Crimenuts.View.Process {
    interface IMemberCard {
        setMember(memberId: number): any;
        showName: boolean;
    }
}
declare module Crimenuts.View.Process {
    interface IMemberDialog {
        setMember(memberId: number): any;
    }
}
declare module Crimenuts.View.Process {
    class InfoBar extends Phaser.Group implements IProcessViewPart {
        constructor();
        onUpdateProcess(model: ProcessModel): void;
        private textLabel;
        private createTextLabel();
        private setInfo(day, victim, arrested, murdererNum);
    }
}
declare module Crimenuts.View.Process {
    class MemberCard extends Phaser.Group implements IMemberCard {
        showName: boolean;
        setMember(memberId: number): void;
        update(): void;
        constructor(director: IProcessDirector, memberId: number, x: number, y: number, w: number, h: number, command?: Command, answerLevel?: number);
        private director;
        private picture;
        private button;
        private nameLabel;
        private spot;
        private answer;
        createAnswer(level: number, w: number, h: number): void;
        private createPicture(world, name, w, h);
        private createNameLabel(name, width, height);
        private createButton(w, h, command);
        private createSpot(width, height);
        private createFrame(w, h);
        private updateAnswer(memberId);
        private getMemberModel(memberId);
    }
}
declare module Crimenuts.View.Process {
    class MembersPool extends Phaser.Group implements IProcessViewPart {
        constructor(director: IProcessDirector);
        onUpdateProcess(processModel: ProcessModel): void;
        static memberWidth: number;
        static memberHeight: number;
        static memberNumInRow: number;
        private cards;
        private director;
        private createMembers(director);
        private calcPersonCardPosition(i, w, h);
    }
}
declare module Crimenuts.View.Process {
    interface ITicksWidget {
        updateTicks(count: number): any;
    }
}
