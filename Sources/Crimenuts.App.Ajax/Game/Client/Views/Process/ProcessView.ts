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
            var dialog: IMemberDialog;
            this.addPart( this.ticks = new Display() );
            this.addPart( new StateBar( Settings.Process.Bars.StateBar.position ) );
            this.addPart( new InfoBar( Settings.Process.Bars.InfoBar.position ) );
            this.addPart( dialog = new MemberDialog( director ) );
            this.addPart( new Members( Settings.Process.Members.position, model, dialog ) );
            this.addPart( new Answers( Settings.Process.Answers.position, controller, observer, model ) );
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