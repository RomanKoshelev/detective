module Crimenuts {

    export class ButtonEssence extends Phaser.Group implements IDecorable, ISignalSource {

        constructor(
            command: Command,
            width: number,
            height: number
        ) {
            super( app.game );
            this.createButton( command, width, height );
        }

        setCommand( command: Command ) {
            var width = this.width;
            var height = this.height;
            this.removeAll( true );
            this.createButton( command, width, height );
        }

        // IDecorable
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
            var states: { [ key: string ]: Phaser.Signal } = {};
            states[ ButtonEssence.signalOver ] = this.button.onInputOver;
            states[ ButtonEssence.signalOut ] = this.button.onInputOut;
            states[ ButtonEssence.signalDown ] = this.button.onInputDown;
            states[ ButtonEssence.signalUp ] = this.button.onInputUp;
            return states;
        }

        // Fields
        private button: Phaser.Button;

        // Utils
        private resize( width: number, height: number ) {
            this.scale.set( width / this.button.texture.width, height / this.button.texture.height );
        }

        private createButton( command: Command, width: number, height: number ) {
            this.button = new Phaser.Button( app.game, 0, 0, Settings.UserInterface.Button.sprite, command.callback, command.context );
            this.add( this.button );
            this.resize( width, height );

        }
    }
}