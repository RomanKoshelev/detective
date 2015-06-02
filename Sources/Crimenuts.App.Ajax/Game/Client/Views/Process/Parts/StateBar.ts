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
                Settings.Process.Bars.width,
                Settings.Process.Bars.height,
                Settings.Default.Font.face,
                Settings.Process.Bars.fontSize,
                Settings.Process.Bars.textColor,
                Settings.Process.Bars.bgColor ) );
        }

        private setState( state: string ) {
            this.textLabel.setText( state );
        }
    }
}