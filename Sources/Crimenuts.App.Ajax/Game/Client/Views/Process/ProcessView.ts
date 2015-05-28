module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group {

        constructor( game: Phaser.Game, model: ProcessModel ) {
            super( game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;

            this.createParts( model );
            this.updateParts( model );
        }

        updateModel (model: ProcessModel ) {
            this.updateParts( model );
        }

        updateTickCount( count: number ) {
            this.ticks.updateTicks( count );
        }

        private parts = new Array <IProcessViewPart>();
        private ticks: ITicksViewer;

        private createParts( model: ProcessModel ) {
            this.parts.push( this.ticks = new Display( this.game ) );
            this.parts.push( new StateBar( this.game, Settings.Process.Bars.StateBar.position ) );
            this.parts.push( new InfoBar( this.game, Settings.Process.Bars.InfoBar.position) );
            this.parts.push( new Members( this.game, Settings.Process.Members.position, model ) );
            this.parts.push( new Answers( this.game, Settings.Process.Answers.position, model ) );
        }

        private updateParts( model: ProcessModel ) {
            this.parts.forEach( p => p.updateModel( model ) );
        }
    }
}