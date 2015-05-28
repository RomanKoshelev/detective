module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group {

        constructor( game: Phaser.Game, model: ProcessModel ) {
            super( game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;

            this.createDisplay();
            this.createStateBar();
            this.createInfoBar();
            this.createMembers( model );

            this.updateModel( model );
        }

        updateModel( model: ProcessModel ) {
            this.parts.forEach( p => p.updateModel( model ) );
        }

        updateTickCount( count: number ) {
            this.display.setBottomText( `[${count}]` );
        }

        private parts = new Array <IProcessViewPart>();
        private display: Display;

        private createStateBar() {
            var stateBar = new StateBar( this.game );
            stateBar.position = Settings.Process.Bars.StateBar.position;
            this.parts.push( stateBar );
        }

        private createInfoBar() {
            var infoBar = new InfoBar( this.game );
            infoBar.position = Settings.Process.Bars.InfoBar.position;
            this.parts.push( infoBar );
        }

        private createMembers( model: ProcessModel ) {
            var members = new Members( this.game, model.World, model.Members );
            members.position = Settings.Process.Members.position;
            this.parts.push( members );
        }

        private createDisplay() {
            this.display = new Display( this.game );
            this.parts.push( this.display );
        }
    }
}