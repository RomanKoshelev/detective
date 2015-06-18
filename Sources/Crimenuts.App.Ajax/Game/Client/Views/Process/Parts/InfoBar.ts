module Crimenuts.View.Process {

    export class InfoBar extends Phaser.Group implements IProcessViewPart{

        constructor() {
            super( app.game );
            this.position = Settings.Process.Bars.InfoBar.position.clone();
            this.createTextLabel();
        }

        onProcessUpdated( director: IProcessDirector ): void {
            var process = director.getProcessModel();
            this.setInfo(
                process.Today.Day,
                process.Today.Victim,
                process.Today.Prisoner,
                process.Today.ActiveMurdererNum );
        }
        
        private textLabel: TextLabel;

        private createTextLabel() {
            this.add( this.textLabel = app.uiFactory.makeTextLabel(
                Settings.Process.Bars.width,
                Settings.Process.Bars.height,
                Settings.Process.Bars.textColor,
                Settings.Process.Bars.bgColor ) );
        }

        private setInfo( day: number, victim: string, arrested: string, murdererNum: number ) {
            this.textLabel.setText( `Day ${day}: ${victim} was killed, ${arrested} arrested, ${murdererNum} active murderers` );
        }
    }
}