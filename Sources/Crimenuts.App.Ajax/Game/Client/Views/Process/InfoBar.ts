module Crimenuts.View.Process {

    export class InfoBar extends Phaser.Group {

        constructor( game: Phaser.Game ) {
            super( game );
            this.createTextLabel( game );
        }
        
        private textLabel: TextLabel;

        private createTextLabel( game: Phaser.Game ) {
            this.add( this.textLabel = new TextLabel(
                game,
                Settings.Process.InfoBar.width,
                Settings.Process.InfoBar.height,
                Settings.Process.InfoBar.fontSize,
                Settings.Process.InfoBar.color,
                Settings.Process.InfoBar.bgColor ) );
        }

        setInfo( day: number, victim: string, arrested: string, murdererNum: number ) {
            this.textLabel.setText( `Day ${day} victim:[${victim}]  arrested:[${arrested}] murders:[${murdererNum}]` );
        }
    }
}