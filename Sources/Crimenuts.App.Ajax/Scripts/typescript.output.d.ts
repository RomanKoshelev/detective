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
        static getPictureKey(name: string, size: number): string;
        static getPictureUrl(name: string, size: number): string;
        static loadPicture(name: string, size: number): void;
        static getPersonKey(world: string, person: string, size?: number): string;
        static getPersonUrl(world: string, person: string, size: number): string;
        static loadPerson(world: string, person: string, size?: number): void;
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
declare module Crimenuts {
    enum AnswerCode {
        Error = 0,
        Unknown = 1,
        Innocent = 2,
        Murderer = 3,
        Suspicious = 4,
        NotSuspicious = 5,
    }
}
declare module Crimenuts {
    enum RelationCode {
        Love = 0,
        Hate = 1,
        Ignore = 2,
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
        module Assets {
            var personSize: number;
            var pictureSize: number;
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
            var spanHorRate: number;
            var spanVerRate: number;
            module Card {
                var heightRate: number;
                var width: number;
                var height: number;
                var inaciveShade: number;
                module Spot {
                    var heightRate: number;
                    var footShiftRate: number;
                    var color: {
                        [key: string]: number;
                    };
                }
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
                    var tintColor: number;
                }
                module Sign {
                    var picture: {
                        [key: string]: string;
                    };
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
declare module Crimenuts {
    interface IProcessController {
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        autoAnswer(processId: string): JQueryPromise<void>;
    }
}
declare module Crimenuts.View.Process {
    class AutoAnswerCommand extends Command {
        constructor(controller: IProcessController, processId: string);
    }
}
declare module Crimenuts.View.Process {
    class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {
        static instance: IMemberDialog;
        constructor(director: IProcessDirector);
        setMember(memberId: number): void;
        onProcessUpdated(director: IProcessDirector): void;
        private director;
        private controller;
        private memberId;
        private title;
        private memberCard;
        private createFrameDecoration();
        private createTitle();
        private createMemberCard();
        private getMemberModel();
        private updateAnswerCardCommand();
    }
}
declare module Crimenuts {
    class MemberDialogCommand extends Command {
        constructor(memberId: number);
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
        onProcessUpdated(director: IProcessDirector): void;
        private parts;
        private ticks;
        private createParts(director, controller, observer, process);
        private addPart(part);
        private updateParts(director);
        private subscribeEvents(observer);
        private onTickCountUpdated(count);
    }
}
declare module Crimenuts {
    class ProcessState extends Phaser.State implements IProcessDirector {
        constructor();
        getProcessModel(): ProcessModel;
        preload(): void;
        create(): void;
        private processId;
        private controller;
        private observer;
        private model;
        private view;
        private createManager();
        private loadModelThen(callback);
        private createView();
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
    class ButtonEssence extends Phaser.Group implements IDecorable, ISignalSource {
        constructor(command: Command, width: number, height: number);
        setCommand(command: Command): void;
        getSize(): Size;
        getDysplayObject(): PIXI.DisplayObject;
        static signalOver: string;
        static signalOut: string;
        static signalDown: string;
        static signalUp: string;
        getSignals(): {
            [key: string]: Phaser.Signal;
        };
        private button;
        private resize(width, height);
        private createButton(command, width, height);
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
    class PersonPicture extends Phaser.Sprite {
        constructor(x: number, y: number, width: number, world?: string, name?: string);
        setPerson(world: string, name: string): void;
        private imageKey;
        private imageWidth;
        private loadAsync(world, name);
        private onLoadComplete();
        private updateScale();
        private setDefaultImage(world, name);
    }
}
declare module Crimenuts {
    class Picture extends Phaser.Sprite {
        constructor(width?: number, name?: string);
        setPicture(name: string): void;
        private imageKey;
        private imageWidth;
        private loadAsync(name);
        private onLoadComplete();
        private updateScale();
        private setDefaultImage();
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
        onProcessUpdated(director: IProcessDirector): void;
    }
}
declare module Crimenuts.View.Process {
    class Answers extends Phaser.Group implements IProcessViewPart {
        constructor(answers: AnswerModel[], cmdAutoAnswer: Command);
        onProcessUpdated(director: IProcessDirector): void;
        private answerSheet;
        private controller;
        private processId;
        private createAnswers();
        private updateAnswers(answers);
        createButtons(cmdAutoAnswer: Command): void;
        private createButton(command, position);
    }
}
declare module Crimenuts.View.Process {
    class Display extends Phaser.Group implements IProcessViewPart, ITicksWidget {
        bottomBar: BottomBar;
        topBar: TopBar;
        constructor();
        onProcessUpdated(director: IProcessDirector): void;
        updateTicks(count: number): void;
        private setBottomText(text);
        private setCaseId(caseId);
    }
}
declare module Crimenuts.View.Process {
    interface IMemberCard {
        setMember(memberId: number): any;
        setCommand(command: Command): any;
        getAnswerCard(): IMemberCard;
        getMemberId(): number;
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
        onProcessUpdated(director: IProcessDirector): void;
        private textLabel;
        private createTextLabel();
        private setInfo(day, victim, arrested, murdererNum);
    }
}
declare module Crimenuts.View.Process {
    class MemberCard extends Phaser.Group implements IMemberCard {
        setMember(memberId: number): void;
        setCommand(command: Command): void;
        getAnswerCard(): IMemberCard;
        getMemberId(): number;
        update(): void;
        constructor(director: IProcessDirector, memberId: number, x: number, y: number, w: number, h: number, command?: Command, hasNameLabel?: boolean, answerLevel?: number, hasSign?: boolean);
        private director;
        private memberId;
        private picture;
        private button;
        private nameLabel;
        private spot;
        private answer;
        private shade;
        private spotEllipse;
        private shadeRect;
        private answerCode;
        private frame;
        private sign;
        private createSign(width, height, hasSign);
        private createSpot(width, height);
        private createAnswer(level, w, h, command);
        private createPicture(world, name, w, h);
        private createNameLabel(name, width, height, hasNameLabel);
        private createButton(command, w, h);
        private createFrame();
        private createShade();
        private setSign(rel);
        private setShade(shade);
        private setSpotColor(color);
        private updateSign(memberId);
        private updatePicture(world, name);
        private updateSpot(memberId);
        private updateAnswer(memberId);
        private updateShade(memberId);
        private updateFrame();
        private updateName(name);
        private getMemberModel(memberId);
    }
}
declare module Crimenuts.View.Process {
    class Members extends Phaser.Group implements IProcessViewPart {
        constructor(director: IProcessDirector);
        onProcessUpdated(director: IProcessDirector): void;
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
