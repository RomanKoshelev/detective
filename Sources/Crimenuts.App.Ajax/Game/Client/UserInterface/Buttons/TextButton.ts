module Crimenuts {

    export class TextButton extends Phaser.Group {

        constructor(
            game: Phaser.Game,
            text: string,
            callback: Function,
            callbackContext: any,
            regularColors: ColorSet,
            highlightColors: ColorSet,
            position: Phaser.Point
    
        ) {
            super( game );
            this.createButton( text, callback, callbackContext, regularColors, highlightColors );
            this.position.set( position.x, position.y );
        }

        private decors = new Array<IDecorable>();

        private createButton(
            text: string,
            callback: Function,
            callbackContext: any,
            regularColors: ColorSet,
            highlightColors: ColorSet
        ) {
            var buttonEssence = this.createButtonEssence( callback, callbackContext );
            var regularDecor = this.createDecor( buttonEssence, text, regularColors );
            var higlightDecor = this.createDecor( buttonEssence, text, highlightColors );

            this.initSignalHandlers( buttonEssence, regularDecor, higlightDecor );
            this.showDecor( regularDecor );
        }

        private createButtonEssence( callback: Function, callbackContext: any ): ButtonEssence {
            var essence = new ButtonEssence(
                this.game,
                callback,
                callbackContext,
                Settings.UserInterface.Button.width,
                Settings.UserInterface.Button.height );
            this.add( essence );
            return essence;
        }

        private createDecor( essence: IDecorable, text: string, colors: ColorSet): IDecorable {
            var decor = new RoundedRectangleDecor(
                new TextDecor(
                    new DecorableProxy( essence ),
                    text,
                    colors.text,
                    Settings.UserInterface.Button.fontSize ),
                colors.fill,
                colors.border,
                Settings.UserInterface.Button.lineWidth );
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
            this.decors.forEach( d => d.getDysplayObject().visible = false );
            decor.getDysplayObject().visible = true;
        }

        private setDecorMapping( source: ISignalSource, signal: string, decor: IDecorable ) {
            source.getSignals()[ signal ].add( () => { this.showDecor( decor ); } );
        }
    }
}