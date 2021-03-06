declare module Crimenuts {
    class DevtoolsView extends Phaser.Group implements IDevtoolsView {
        getDisplayObject(): PIXI.DisplayObject;
        update(): void;
        constructor(controller: IDevtoolsController);
        private controller;
        private buttonTop;
        private textArea;
        private createWindow();
        private createTextArea();
        private createButtons();
        private createButton(command);
    }
}
declare module Crimenuts {
    class DevtoolsManager implements IDevtoolsDirector, IDevtoolsController {
        getView(): IDevtoolsView;
        constructor();
        private view;
    }
}
declare module Crimenuts {
    class Application {
        game: Phaser.Game;
        server: ServerAdapter;
        uiFactory: IUIFactory;
        devtools: IDevtoolsDirector;
        processDirector: IProcessDirector;
        constructor();
        onProcessStateCreated(processDirector: IProcessDirector): void;
        private onServerStarted();
        private createGame(width, height);
        static onGameCreated(): void;
        private getGameScreenSize();
    }
    var app: Application;
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
    class ColorPack {
        constructor(fill: number, border: number, text: string);
        fill: number;
        border: number;
        text: string;
    }
}
declare module Crimenuts {
    class SizePack {
        height: number;
        width: number;
        font: number;
        stroke: number;
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
    module Color {
        var black: number;
        var white: number;
        var transparent: number;
    }
    module UserInterface {
        module Button {
            var sprite: string;
            var leftAlign: number;
            var verSpan: number;
            var sizes: {
                width: number;
                height: number;
                font: number;
                stroke: number;
            };
            module White {
                module Regular {
                    var colors: ColorPack;
                }
                module Highlight {
                    var colors: ColorPack;
                }
            }
            module Frame {
                module Regular {
                    var colors: ColorPack;
                }
                module Highlight {
                    var colors: ColorPack;
                }
            }
            module Menu {
                var sizes: {
                    width: number;
                    height: number;
                    font: number;
                    stroke: number;
                };
                module Regular {
                    var colors: ColorPack;
                }
                module Highlight {
                    var colors: ColorPack;
                }
            }
        }
        module TextLabel {
            var fontSizeToHeightRate: number;
        }
        module Bracket {
            var width: number;
            var bgColor: number;
            var lineColor: number;
            var lineWidth: number;
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
                var height: number;
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
                module Text {
                    var position: Phaser.Point;
                    var width: number;
                    var height: number;
                    var color: string;
                    var bgColor: number;
                }
                module Buttons {
                    var bottom: number;
                }
            }
        }
        module Board {
            var position: Phaser.Point;
            var width: number;
            var height: number;
            module Buttons {
                var bottom: number;
            }
            module Answers {
                var position: Phaser.Point;
                var width: number;
                var height: number;
                var bgColor: number;
                module Answer {
                    var fontSize: number;
                    var left: number;
                    var top: number;
                    module Colors {
                        var regular: string;
                    }
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
    class Command implements ICommand {
        updateAvailability(): void;
        name: string;
        callback: Function;
        context: any;
        isAvailable: boolean;
        static nothing: ICommand;
        constructor(name?: string, callback?: Function, context?: any);
        protected doUpdateAvailability(): boolean;
    }
}
declare module Crimenuts {
    class ProcessesResetCommand extends Command {
        constructor();
        execute(): void;
    }
}
declare module Crimenuts {
    class ShowDevtoolsCommand extends Command {
        constructor();
        execute(): void;
    }
}
declare module Crimenuts {
    class ShowUserActionsCommand extends Command {
        constructor(textArea: ITextArea);
        private textArea;
        private execute();
    }
}
declare module Crimenuts {
    interface ICommand {
        callback: Function;
        context: any;
        name: string;
        isAvailable: boolean;
        updateAvailability(): any;
    }
}
declare module Crimenuts {
    class UserActionCommand extends Command {
        constructor(name: string, director: IProcessDirector, processId: string, action: UserActionCode, args?: number[]);
        protected director: IProcessDirector;
        protected processId: string;
        protected action: UserActionCode;
        protected args: number[];
        protected getController(): IProcessController;
        protected doExecute(): void;
        protected doUpdateAvailability(): boolean;
        private checkArgs(args);
    }
}
declare module Crimenuts {
    class AutoAnswerCommand extends UserActionCommand {
        constructor(director: IProcessDirector, processId: string);
        protected doExecute(): void;
    }
}
declare module Crimenuts {
    class ContinueCommand extends UserActionCommand {
        constructor(director: IProcessDirector, processId: string);
        protected doExecute(): void;
    }
}
declare module Crimenuts {
    class MemberCommand extends UserActionCommand {
        constructor(name: string, director: IProcessDirector, processId: string, action: UserActionCode, ...args: number[]);
        protected memberId: number;
        protected onCurrentMemberChanged(memberId: number): void;
        protected setMemberId(memberId: number): void;
        protected getMemberModel(): MemberModel;
    }
}
declare module Crimenuts {
    class MemberAnnotateCommand extends MemberCommand {
        constructor(director: IProcessDirector, processId: string, memberId: number);
        update(): void;
        protected doUpdateAvailability(): boolean;
        protected doExecute(): void;
        private code;
        private updateAnnotationCode();
        private getAnnotationCode();
    }
}
declare module Crimenuts {
    class MemberArrestCommand extends MemberCommand {
        constructor(director: IProcessDirector, processId: string, memberId: number);
        protected doExecute(): void;
    }
}
declare module Crimenuts {
    class MemberEarlyArrestCommand extends MemberCommand {
        constructor(director: IProcessDirector, processId: string, memberId: number);
        protected doExecute(): void;
    }
}
declare module Crimenuts.View.Process {
    class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {
        static instance: IMemberDialog;
        constructor(director: IProcessDirector);
        setMember(memberId: number): void;
        onProcessUpdated(director: IProcessDirector): void;
        private director;
        private memberId;
        private title;
        private text;
        private memberCard;
        private buttons;
        private createFrameDecoration();
        private createTitle();
        private createText();
        private createButtons(director);
        private createMemberCard();
        private updateAnswerCardCommand();
        private updateTitle();
        private updateText();
        private updateMemberCard();
        private getMemberModel();
    }
}
declare module Crimenuts {
    class MemberSelectCommand extends Command {
        constructor(controller: IProcessController, memberId: number);
    }
}
declare module Crimenuts {
    interface IDevtoolsController {
    }
}
declare module Crimenuts {
    interface IDevtoolsDirector {
        getView(): IDevtoolsView;
    }
}
declare module Crimenuts {
    interface IProcessController {
        currentMemberChanged(memberId: number): any;
        memberIdToNumber(memberId: number): number;
        onCurrentMemberChanged: Phaser.Signal;
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        autoAnswer(processId: string): JQueryPromise<void>;
        arrest(processId: string, memberId: number): JQueryPromise<void>;
        continue(processId: string): JQueryPromise<void>;
        earlyArrest(processId: string, memberId: number): any;
        annotate(processId: string, memberId: number, note: AnswerCode): any;
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
        getProcess(processId: string): JQueryPromise<ProcessModel>;
        continue(processId: string): JQueryPromise<void>;
        autoAnswer(processId: string): JQueryPromise<void>;
        arrest(processId: string, memberId: number): JQueryPromise<void>;
        earlyArrest(processId: string, memberId: number): JQueryPromise<void>;
        annotate(processId: string, memberId: number, note: AnswerCode): JQueryPromise<void>;
        currentMemberChanged(memberId: number): void;
        memberIdToNumber(memberId: number): number;
        onProcessUpdated: Phaser.Signal;
        onTickCountUpdated: Phaser.Signal;
        onProcessesReset: Phaser.Signal;
        onCurrentMemberChanged: Phaser.Signal;
        constructor(server: IGameHubServer, observer: IServerObserver);
        private server;
        private process;
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
        annotate(processId: string, memberId: number, note: string): JQueryPromise<void>;
        arrest(processId: string, memberId: number): JQueryPromise<void>;
        earlyArrest(processId: string, memberId: number): JQueryPromise<void>;
        continue(processId: string): JQueryPromise<void>;
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
        getController(): IProcessController;
        getObserver(): IProcessObserver;
        getView(): IStateView;
    }
}
declare module Crimenuts {
    interface IStateView {
        getRootGroup(): Phaser.Group;
    }
}
declare module Crimenuts.View.Process {
    class ProcessView extends Phaser.Group implements IProcessViewPart, IStateView {
        getRootGroup(): Phaser.Group;
        onProcessUpdated(director: IProcessDirector): void;
        constructor(director: IProcessDirector);
        private parts;
        private ticks;
        private createParts(director);
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
        getController(): IProcessController;
        getObserver(): IProcessObserver;
        getView(): IStateView;
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
    enum UserActionCode {
        None = 0,
        Skip = 1,
        Ask = 2,
        AutoAsk = 3,
        Arrest = 4,
        Start = 5,
        Stop = 6,
        EarlyArrest = 7,
        Continue = 8,
        Annotate = 9,
    }
}
declare module Crimenuts {
    class ButtonEssence extends Phaser.Group implements IDecorable, ISignalSource, IButton {
        getCommand(): ICommand;
        setCommand(command: Command): void;
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        static signalOver: string;
        static signalOut: string;
        static signalDown: string;
        static signalUp: string;
        getSignals(): {
            [key: string]: Phaser.Signal;
        };
        constructor(command: ICommand, width: number, height: number);
        private button;
        private command;
        private resize(width, height);
        private createButton(command, width, height);
    }
}
declare module Crimenuts {
    class ButtonsHolder extends Phaser.Group {
        update(): void;
        protected bottom: number;
        protected buttons: IButton[];
        protected createButtonAtBottom(command: ICommand, method: Function, num: number): void;
    }
}
declare module Crimenuts {
    class RoundedRectangleDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, fillColor?: number, lineColor?: number, lineWidth?: number);
        private component;
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        createRoundedRectangle(size: Size, fillColor: number, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class TextButton extends Phaser.Group implements IButton {
        getDisplayObject(): PIXI.DisplayObject;
        getCommand(): ICommand;
        setCommand(command: ICommand): void;
        constructor(command: ICommand, regularColors: ColorPack, highlightColors: ColorPack, size: SizePack, position: Phaser.Point);
        private decors;
        private essence;
        private createButton(command, regularColors, highlightColors, size);
        private createButtonEssence(command, width, height);
        private createDecor(essence, text, colors, size);
        private initSignalHandlers(source, regularDecor, higlightDecor);
        private showDecor(decor);
        private setDecorMapping(source, signal, decor);
    }
}
declare module Crimenuts {
    class FrameButton extends TextButton {
        constructor(command: ICommand, position?: Phaser.Point);
    }
}
declare module Crimenuts {
    interface IButton extends IDisplayObject {
        getCommand(): ICommand;
        setCommand(command: ICommand): any;
    }
}
declare module Crimenuts {
    class MenuButton extends TextButton {
        constructor(command: ICommand, position?: Phaser.Point);
    }
}
declare module Crimenuts {
    class WhiteButton extends TextButton {
        constructor(command: ICommand, position?: Phaser.Point);
    }
}
declare module Crimenuts {
    class BracketDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, lineColor?: number, lineWidth?: number);
        private component;
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        createBrackets(size: Size, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class Decorable extends Phaser.Sprite implements IDecorable {
        constructor(width: number, height: number);
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        private resize(width, height);
    }
}
declare module Crimenuts {
    class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor(essence: IDecorable);
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        private essence;
    }
}
declare module Crimenuts {
    interface IDecorable {
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class RectangleDecor extends Phaser.Graphics implements IDecorable {
        constructor(component: IDecorable, fillColor?: number, lineColor?: number, lineWidth?: number);
        private component;
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
        createRectangle(size: Size, fillColor: number, lineColor: number, lineWidth: number): void;
    }
}
declare module Crimenuts {
    class TextDecor extends Phaser.Group implements IDecorable {
        constructor(component: IDecorable, text: string, color?: string, fontSize?: number, fontFace?: string);
        private component;
        private textLabel;
        getSize(): Size;
        getDisplayObject(): PIXI.DisplayObject;
    }
}
declare module Crimenuts {
    class TextLabel extends Phaser.Graphics implements ITextArea {
        getDisplayObject(): PIXI.DisplayObject;
        setText(text: string): void;
        alignLeft(): void;
        alignCenter(): void;
        alignTop(): void;
        alignMiddle(): void;
        setFontBold(): void;
        constructor(width: number, height: number, fontFace?: string, fontSize?: number, color?: string, bgcolor?: number);
        private label;
        private fontSize;
        private createLabel(fontFace, fontSize, color);
        private createBackground(width, height, bgcolor);
    }
}
declare module Crimenuts {
    class DefaultUIFactory implements IUIFactory {
        makeMainButton(command: Command, position?: Phaser.Point): IButton;
        makeOptionalButton(command: Command, position?: Phaser.Point): IButton;
        makeTopMenuButton(command: Command, position?: Phaser.Point): IButton;
        makeTextLabel(width: number, height: number, color: string, bgColor: number): ITextArea;
    }
}
declare module Crimenuts {
    interface IUIFactory {
        makeMainButton(command: ICommand, position?: Phaser.Point): IButton;
        makeTopMenuButton(command: ICommand, position?: Phaser.Point): IButton;
        makeTextLabel(width: number, height: number, textColor: string, bgColor: number): ITextArea;
        makeOptionalButton(command: ICommand, position?: Phaser.Point): IButton;
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
    interface ITextArea extends IDisplayObject {
        setText(text: string): any;
        alignTop(): any;
    }
}
declare module Crimenuts {
    interface IDisplayObject {
        getDisplayObject(): PIXI.DisplayObject;
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
    interface IDevtoolsView extends IDisplayObject {
    }
}
declare module Crimenuts {
    class BottomBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor();
        private createBar();
    }
}
declare module Crimenuts {
    class TopBar extends Phaser.Graphics {
        text: Phaser.Text;
        constructor();
        private createBar();
        private createMenu();
    }
}
declare module Crimenuts.View.Process {
    interface IProcessViewPart {
        onProcessUpdated(director: IProcessDirector): void;
    }
}
declare module Crimenuts.View.Process {
    class Board extends Phaser.Group implements IProcessViewPart {
        onProcessUpdated(director: IProcessDirector): void;
        constructor(director: IProcessDirector);
        private answers;
        private status;
        private buttons;
        private createDecoration();
        private createStatus(process);
        private createAnswers(answerModels);
        private createButtons(director, processId);
    }
}
declare module Crimenuts.View.Process {
    class BoardAnswers extends Phaser.Group implements IProcessViewPart {
        onProcessUpdated(director: IProcessDirector): void;
        constructor(answers: AnswerModel[]);
        private answerSheet;
        private createAnswers();
        private updateAnswers(answers);
    }
}
declare module Crimenuts.View.Process {
    class BoardButtons extends ButtonsHolder {
        constructor(director: IProcessDirector, processId: string);
        private createButtons(director, processId);
    }
}
declare module Crimenuts.View.Process {
    class BoardStatus extends Phaser.Group implements IProcessViewPart {
        onProcessUpdated(director: IProcessDirector): void;
        constructor(process: ProcessModel);
        private textLabel;
        private createTextLabel();
        private setText(process);
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
    class MemberCard extends Phaser.Group implements IMemberCard {
        setMember(memberId: number): void;
        setCommand(command: Command): void;
        getAnswerCard(): IMemberCard;
        getMemberId(): number;
        update(): void;
        constructor(director: IProcessDirector, memberId: number, x: number, y: number, w: number, h: number, command?: ICommand, hasNameLabel?: boolean, answerLevel?: number, hasSign?: boolean);
        private director;
        private memberId;
        private picture;
        private button;
        private nameLabel;
        private spot;
        private superCard;
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
    class MemberDialogButtons extends ButtonsHolder {
        constructor(director: IProcessDirector, processId: string, memberId: number);
        private createButtons(director, processId, memberId);
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
