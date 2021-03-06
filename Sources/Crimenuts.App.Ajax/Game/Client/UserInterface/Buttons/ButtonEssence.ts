module Crimenuts {

    export class ButtonEssence extends Phaser.Group implements IDecorable, ISignalSource, IButton {

        // IButton 
        getCommand(): ICommand {
            return this.command;
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

        getDisplayObject(): PIXI.DisplayObject {
            return this;
        }

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

        // Ctor
        constructor( command: ICommand, width: number, height: number ) {
            super( app.game );
            this.createButton( command, width, height );
        }

        // Fields
        private button: Phaser.Button;
        private command: ICommand;

        // Utils
        private resize( width: number, height: number ) {
            this.scale.set( width / this.button.texture.width, height / this.button.texture.height );
        }

        private createButton( command: ICommand, width: number, height: number ) {
            this.button = new Phaser.Button( app.game, 0, 0, Settings.UserInterface.Button.sprite, command.callback, command.context );
            this.command = command;
            this.add( this.button );
            this.resize( width, height );

        }
    }
}