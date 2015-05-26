module Crimenuts {

    export class ProcessStateBar extends Phaser.Group {

        constructor( game: Phaser.Game, x: number, y: number ) {
            super( game );
            this.position.set( x, y );
            this.createTextLabel( game );
        }
        
        private textLabel: TextLabel;

        private createTextLabel( game: Phaser.Game ) {
            this.add( this.textLabel = new TextLabel(
                game,
                name,
                0, 0,
                Settings.Process.StateBar.width,
                Settings.Process.StateBar.height,
                Settings.Process.StateBar.fontSize,
                Settings.Process.StateBar.color,
                Settings.Process.StateBar.bgColor ) );
        }

        setText( text: string ) {
            this.textLabel.setText( text );
        }
    }
}