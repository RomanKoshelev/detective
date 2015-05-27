﻿module Crimenuts {

    export class ProcessInfoBar extends Phaser.Group {

        constructor( game: Phaser.Game ) {
            super( game );
            this.createTextLabel( game );
        }
        
        private textLabel: TextLabel;

        private createTextLabel( game: Phaser.Game ) {
            this.add( this.textLabel = new TextLabel(
                game,
                Settings.Process.StateBar.width,
                Settings.Process.StateBar.height,
                Settings.Process.StateBar.fontSize,
                Settings.Process.StateBar.color,
                Settings.Process.StateBar.bgColor ) );
            this.textLabel.setFontBold();
        }

        setState( state: string ) {
            this.textLabel.setText( state );
        }
    }
}