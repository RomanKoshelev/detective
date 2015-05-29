module Crimenuts {

    export class Button extends Phaser.Button implements IDecorable {

        constructor(
            game: Phaser.Game,
            callback?: Function,
            callbackContext?: any,
            x: number=0, y: number=0,
            width: number = Settings.Default.Button.width,
            height: number  = Settings.Default.Button.height
            ) {
            super( game, x, y, Settings.Default.Button.key, callback, callbackContext );
            this.resize( width, height );
        }

        getGame(): Phaser.Game { return this.game; }

        private resize( width: number, height: number ) {
            this.scale.set( width / this.texture.width, height/ this.texture.height );
        }

        getSize(): Size {
            return new Size( this.width, this.height );
        }
    }
}