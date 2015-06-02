module Crimenuts.View.Process {

    export class InfoBar extends Phaser.Group {

        constructor( position: Phaser.Point ) {
            super( app.game );
            this.position = position;
            this.createTextLabel();
        }
        
        updateModel( model: ProcessModel ): void {
            this.setInfo(
                model.Today.Day,
                model.Today.Victim,
                model.Today.Prisoner,
                model.Today.ActiveMurdererNum );
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

        private setInfo( day: number, victim: string, arrested: string, murdererNum: number ) {
            this.textLabel.setText( `Day ${day}: ${victim} was killed, ${arrested} arrested, ${murdererNum} active murderers` );
        }
    }
}