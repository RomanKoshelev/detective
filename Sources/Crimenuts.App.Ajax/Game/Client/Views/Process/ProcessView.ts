module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group implements IProcessViewPart {

        constructor(
            director: IProcessDirector,
            controller: IProcessController,
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            super( app.game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;
            this.createParts( director, controller, observer, model );
            this.subscribeEvents( observer );
        }

        onUpdateProcess( model: ProcessModel ): void {
            this.updateParts( model );
        }


        // Fields
        private parts = new Array<IProcessViewPart>();
        private ticks: ITicksWidget;

        // Parts Utils
        private createParts(
            director: IProcessDirector,
            controller: IProcessController,
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            this.addPart( this.ticks = new Display() );
            this.addPart( new InfoBar( ) );
            this.addPart( new MemberDialog( director ) );
            this.addPart( new Members( model ) );
            this.addPart( new Answers( controller, model ) );
            this.updateParts( model );
        }

        private addPart( part: IProcessViewPart ) {
            this.parts.push( part );
            this.add( part );
        }

        private updateParts( model: ProcessModel ) {
            this.parts.forEach( p => p.onUpdateProcess( model ) );
        }

        // Events
        private subscribeEvents( observer: IProcessObserver ) {
            observer.onTickCountUpdated.add( this.onTickCountUpdated, this );
        }

        private onTickCountUpdated( count: number ) {
            this.ticks.updateTicks( count );
        }
    }
}