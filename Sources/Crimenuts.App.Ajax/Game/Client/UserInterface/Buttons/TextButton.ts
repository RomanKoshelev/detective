/// <reference path="../Buttons/ButtonEssence.ts" />
/// <reference path="../Decorators/RoundedRectangleDecor.ts" />
/// <reference path="../../Commands/ICommand.ts" />
module Crimenuts {

    export class TextButton extends Phaser.Group implements IButton {

        // IButton
        getDisplayObject(): PIXI.DisplayObject {
            return this;
        }

        getCommand(): ICommand {
            return this.essence.getCommand();
        }

        setCommand( command: ICommand ) {
            this.essence.setCommand( command );
        }

        // Ctor
        constructor(
            command: ICommand,
            regularColors: ColorPack,
            highlightColors: ColorPack,
            size: SizePack,
            position: Phaser.Point
        ) {
            super( app.game );
            this.createButton( command, regularColors, highlightColors, size );
            this.position.set( position.x, position.y );
        }

        // Fields
        private decors = new Array<IDecorable>();
        private essence: IButton;

        // Utils
        private createButton(
            command: ICommand,
            regularColors: ColorPack,
            highlightColors: ColorPack,
            size: SizePack
        ) {
            var buttonEssence = this.createButtonEssence( command, size.width, size.height );
            var regularDecor = this.createDecor( buttonEssence, command.name, regularColors, size );
            var higlightDecor = this.createDecor( buttonEssence, command.name, highlightColors, size );

            this.essence = buttonEssence;
            this.initSignalHandlers( buttonEssence, regularDecor, higlightDecor );
            this.showDecor( regularDecor );
        }

        private createButtonEssence( command: ICommand, width: number, height: number ): ButtonEssence {
            var essence = new ButtonEssence(
                command,
                width,
                height
            );
            this.add( essence );
            return essence;
        }

        private createDecor( essence: IDecorable, text: string, colors: ColorPack, size: SizePack ): IDecorable {
            var decor = new RoundedRectangleDecor(
                new TextDecor(
                    new DecorableProxy( essence ),
                    text,
                    colors.text,
                    size.font
                ),
                colors.fill,
                colors.border,
                size.stroke
            );
            decor.visible = false;
            this.add( decor );
            this.decors.push( decor );
            return decor;
        }

        private initSignalHandlers( source: ISignalSource, regularDecor: IDecorable, higlightDecor: IDecorable ) {
            this.setDecorMapping( source, ButtonEssence.signalOut, regularDecor );
            this.setDecorMapping( source, ButtonEssence.signalOver, higlightDecor );
            this.setDecorMapping( source, ButtonEssence.signalUp, regularDecor );
            this.setDecorMapping( source, ButtonEssence.signalDown, higlightDecor );
        }

        private showDecor( decor: IDecorable ) {
            this.decors.forEach( d => d.getDisplayObject().visible = false );
            decor.getDisplayObject().visible = true;
        }

        private setDecorMapping( source: ISignalSource, signal: string, decor: IDecorable ) {
            source.getSignals()[ signal ].add( () => { this.showDecor( decor ); } );
        }
    }
}