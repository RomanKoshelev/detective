module Crimenuts {

    export class ButtonEssence extends Phaser.Button implements IDecorable, ISignalSource {

        static stateOver = "hover";
        static stateOut = "out";

        constructor(
            game: Phaser.Game,
            callback?: Function,
            callbackContext?: any,
            width: number = Settings.UserInterface.Button.width,
            height: number  = Settings.UserInterface.Button.height
            ) {
            super( game, 0, 0, Settings.UserInterface.Button.sprite, callback, callbackContext );
            this.resize( width, height );
        }

        getGame(): Phaser.Game { return this.game; }

        private resize( width: number, height: number ) {
            this.scale.set( width / this.texture.width, height/ this.texture.height );
        }

        getSize(): Size {
            return new Size( this.width, this.height );
        }

        getDysplayObject(): PIXI.DisplayObject { return this; }

        getSignals(): { [ key: string ]: Phaser.Signal } {
            var states: { [key: string]: Phaser.Signal } = {};
            states[ButtonEssence.stateOver] = this.onInputOver;
            states[ButtonEssence.stateOut] = this.onInputOut;
            return states;
        }
    }
}