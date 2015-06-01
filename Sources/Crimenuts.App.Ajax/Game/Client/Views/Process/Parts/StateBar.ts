module Crimenuts.View.Process {

    export class StateBar extends Phaser.Group implements IProcessViewPart {

        constructor( position: Phaser.Point ) {
            super( app.game );
            this.position = position;
            this.createTextLabel();
        }
        
        updateModel( model: ProcessModel ): void {
            this.setState( model.State );
        }

        private textLabel: TextLabel;

        private createTextLabel() {
            this.add( this.textLabel = new TextLabel(
                Settings.Process.Bars.StateBar.width,
                Settings.Process.Bars.StateBar.height,
                Settings.Default.Font.face,
                Settings.Process.Bars.StateBar.fontSize,
                Settings.Process.Bars.StateBar.textColor,
                Settings.Process.Bars.StateBar.bgColor ) );
        }

        private setState( state: string ) {
            this.textLabel.setText( state );
        }
    }
}