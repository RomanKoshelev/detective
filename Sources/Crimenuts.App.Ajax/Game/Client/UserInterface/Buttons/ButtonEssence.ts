module Crimenuts {

    export class ButtonEssence extends Phaser.Button implements IDecorable, ISignalSource {

        constructor(
            command: Command,
            width: number = Settings.UserInterface.Button.width,
            height: number  = Settings.UserInterface.Button.height
            ) {
            super( app.game, 0, 0, Settings.UserInterface.Button.sprite, command.callback, command.context );
            this.resize( width, height );
        }

        // IDecorable
        getGame(): Phaser.Game { return this.game; }

        private resize( width: number, height: number ) {
            this.scale.set( width / this.texture.width, height/ this.texture.height );
        }

        getSize(): Size {
            return new Size( this.width, this.height );
        }

        getDysplayObject(): PIXI.DisplayObject { return this; }

        // ISignalSource
        static signalOver = "signal.hover";
        static signalOut = "signal.out";
        static signalDown = "signal.down";
        static signalUp = "signal.up";

        getSignals(): { [ key: string ]: Phaser.Signal } {
            var states: { [key: string]: Phaser.Signal } = {};
            states[ButtonEssence.signalOver] = this.onInputOver;
            states[ButtonEssence.signalOut] = this.onInputOut;
            states[ButtonEssence.signalDown] = this.onInputDown;
            states[ButtonEssence.signalUp] = this.onInputUp;
            return states;
        }
    }
}