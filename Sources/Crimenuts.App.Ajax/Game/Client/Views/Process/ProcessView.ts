module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group {

        constructor(
            game: Phaser.Game,
            controller: IProcessController,
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            super( game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;
            this.createParts( controller, observer, model );
            this.subscribeEvents( observer );
        }

        // Fields
        private parts = new Array<IProcessViewPart>();
        private ticks: ITicksViewer;

        // Parts Utils
        private createParts( controller: IProcessController, observer: IProcessObserver, model: ProcessModel ) {
            this.addPart( this.ticks = new Display( this.game ) );
            this.addPart( new StateBar( this.game, Settings.Process.Bars.StateBar.position ) );
            this.addPart( new InfoBar( this.game, Settings.Process.Bars.InfoBar.position ) );
            this.addPart( new Members( this.game, Settings.Process.Members.position, model ) );
            this.addPart( new Answers( this.game, Settings.Process.Answers.position, controller, observer, model ) );
            this.updateParts( model );
        }

        private addPart( part: any ) {
            this.parts.push( part );
            this.add( part );
        }

        private updateParts( model: ProcessModel ) {
            this.parts.forEach( p => p.updateModel( model ) );
        }

        // Events
        private subscribeEvents( observer: IProcessObserver ) {
            observer.onProcessUpdated.add( this.onProcessUpdated, this );
            observer.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        private onProcessUpdated( model: ProcessModel ) {
            this.updateParts( model );
        }

        private onTickCountUpdated( count: number ) {
            this.ticks.updateTicks( count );
        }
      
    }
}