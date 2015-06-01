module Crimenuts {

    export class DefaultButton extends Phaser.Group {

        constructor(
            game: Phaser.Game,
            text: string,
            callback: Function,
            callbackContext: any,
            position: Phaser.Point
        ) {
            super( game );
            this.createButton( text, callback, callbackContext );
            this.position.set( position.x, position.y );
        }

        private decors = new Array<IDecorable>();

        private createButton( text: string, callback: Function, callbackContext: any ) {
            var buttonEssence = this.createButtonEssence( callback, callbackContext );
            var regularDecor = this.createRegularDecor( buttonEssence, text );
            var higlightDecor = this.createHoverDecor( buttonEssence, text );

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

        private createRegularDecor( essence: IDecorable, text: string ): IDecorable {
            return this.createDecor( essence, text,
                Settings.UserInterface.Button.Default.Regular.textColor,
                Settings.UserInterface.Button.Default.Regular.fillColor,
                Settings.UserInterface.Button.Default.Regular.lineColor );
        }

        private createHoverDecor( essence: IDecorable, text: string ): IDecorable {
            return this.createDecor( essence, text,
                Settings.UserInterface.Button.Default.Hover.textColor,
                Settings.UserInterface.Button.Default.Hover.fillColor,
                Settings.UserInterface.Button.Default.Hover.lineColor );
        }

        private createDecor( essence: IDecorable, text: string, textColor: string, fillColor: number, lineColor: number ): IDecorable {
            var decor = new RoundedRectangleDecor(
                new TextDecor(
                    new DecorableProxy( essence ),
                    text,
                    textColor,
                    Settings.UserInterface.Button.fontSize ),
                fillColor,
                lineColor,
                Settings.UserInterface.Button.lineWidth );
            decor.visible = false;
            this.add( decor );
            this.decors.push( decor );
            return decor;
        }

        private initSignalHandlers( source: ISignalSource, regularDecor: IDecorable, higlightDecor: IDecorable ) {
            this.setDecorMapping( source, ButtonEssence.stateOut, regularDecor );
            this.setDecorMapping( source, ButtonEssence.stateOver, higlightDecor );
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