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

        private createButton( text: string, callback: Function, callbackContext: any ) {
            var essence = new Button( this.game, callback, callbackContext, Settings.UserInterface.Button.width, Settings.UserInterface.Button.height );

            var regularDecor =
                new RoundedRectangleDecor(
                    new TextDecor(
                        new DecorableProxy( essence ),
                        text,
                        Settings.UserInterface.Button.Default.Regular.textColor,
                        Settings.UserInterface.Button.fontSize ),
                    Settings.UserInterface.Button.Default.Regular.fillColor,
                    Settings.UserInterface.Button.Default.Regular.lineColor,
                    Settings.UserInterface.Button.Default.lineWidth );
//            regularDecor.visible = false;


            var hoverDecor =
                new RoundedRectangleDecor(
                    new TextDecor(
                        new DecorableProxy( essence ),
                        text,
                        Settings.UserInterface.Button.Default.Hover.textColor,
                        Settings.UserInterface.Button.fontSize ),
                    Settings.UserInterface.Button.Default.Hover.fillColor,
                    Settings.UserInterface.Button.Default.Hover.lineColor,
                    Settings.UserInterface.Button.Default.lineWidth );
            hoverDecor.visible = false;

            this.add( essence );
            this.add( regularDecor );
            this.add( hoverDecor );
        }
    }

    export class DecorableProxy extends Phaser.Group implements IDecorable {
        constructor( essence: IDecorable ) {
            super( essence.getGame() );
            this.essence = essence;
        }

        getGame(): Phaser.Game {
            return this.essence.getGame();
        }

        getSize(): Size {
            return this.essence.getSize();
        }

        getDysplayObject(): PIXI.DisplayObject {
            return this.essence.getDysplayObject();
        }

        private essence: IDecorable;
    }

}