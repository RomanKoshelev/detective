module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group {

        constructor(
            controller: IProcessController,
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            super( app.game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;
            this.createParts( controller, observer, model );
            this.subscribeEvents( observer );
        }

        // Fields
        private parts = new Array<IProcessViewPart>();
        private ticks: ITicksWidget;

        // Parts Utils
        private createParts(
            controller: IProcessController,
            observer: IProcessObserver,
            model: ProcessModel
        ) {
            this.addPart( this.ticks = new Display() );
            this.addPart( new StateBar( Settings.Process.Bars.StateBar.position ) );
            this.addPart( new InfoBar( Settings.Process.Bars.InfoBar.position ) );
            this.addPart( new Members( Settings.Process.Members.position, model ) );
            this.addPart( new Answers( Settings.Process.Answers.position, controller, observer, model ) );
            this.addPart( new MemberDialog() );
            this.updateParts( model );
        }

        private addPart( part: IProcessViewPart ) {
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