module Crimenuts.View.Process {

    export class InfoBar extends Phaser.Group {

        constructor( game: Phaser.Game, position: Phaser.Point ) {
            super( game );
            this.position = position;
            this.createTextLabel( game );
        }
        
        updateModel( model: ProcessModel ): void {
            this.setInfo(
                model.Today.Day,
                model.Today.Victim,
                model.Today.Prisoner,
                model.Today.ActiveMurdererNum );
        }

        private textLabel: TextLabel;

        private createTextLabel( game: Phaser.Game ) {
            this.add( this.textLabel = new TextLabel(
                game,
                Settings.Process.Bars.InfoBar.width,
                Settings.Process.Bars.InfoBar.height,
                Settings.Default.Font.face,
                Settings.Process.Bars.InfoBar.fontSize,
                Settings.Process.Bars.InfoBar.textColor,
                Settings.Process.Bars.InfoBar.bgColor ) );
        }

        private setInfo( day: number, victim: string, arrested: string, murdererNum: number ) {
            this.textLabel.setText( `Day ${day}: ${victim} was killed, ${arrested} arrested, ${murdererNum} active murderers` );
        }
    }
}