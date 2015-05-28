﻿module Crimenuts.View.Process {

    export class StateBar extends Phaser.Group implements IProcessViewPart {

        constructor( game: Phaser.Game ) {
            super( game );
            this.createTextLabel( game );
        }
        
        updateModel( model: ProcessModel ): void {
            this.setState( model.State );
        }

        private textLabel: TextLabel;

        private createTextLabel( game: Phaser.Game ) {
            this.add( this.textLabel = new TextLabel(
                game,
                Settings.Process.Bars.StateBar.width,
                Settings.Process.Bars.StateBar.height,
                Settings.Process.Bars.StateBar.fontSize,
                Settings.Process.Bars.StateBar.textColor,
                Settings.Process.Bars.StateBar.bgColor ) );
        }

        private setState( state: string ) {
            this.textLabel.setText( state );
        }
    }
}