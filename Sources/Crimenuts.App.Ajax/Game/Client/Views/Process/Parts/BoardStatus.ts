module Crimenuts.View.Process {

    export class BoardStatus extends Phaser.Group implements IProcessViewPart{

        onProcessUpdated( director: IProcessDirector ): void {
            var process = director.getProcessModel();
            this.setText( process );
        }
        constructor(process: ProcessModel) {
            super( app.game );
            this.position = Settings.Process.Bars.InfoBar.position.clone();
            this.createTextLabel();
            this.setText( process );
        }
        
        private textLabel: ITextArea;

        private createTextLabel() {
            this.add( this.textLabel = app.uiFactory.makeTextLabel(
                Settings.Process.Bars.width,
                Settings.Process.Bars.height,
                Settings.Process.Bars.textColor,
                Settings.Process.Bars.bgColor ) );
        }

        private setText( process: ProcessModel) {
            var state = process.State;
            var day = process.Today.Day;
            var victim = process.Today.Victim;
            var arrested = process.Today.Prisoner;
            var murdererNum = process.Today.ActiveMurdererNum;

            this.textLabel.setText( `Day ${day}: ${state}, ${victim} was killed, ${arrested} arrested, ${murdererNum} active murderers` );
        }
    }
}