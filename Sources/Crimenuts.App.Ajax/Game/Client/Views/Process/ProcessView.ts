/// <reference path="../../Commands/AutoAnswerCommand.ts" />

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

        onProcessUpdated( director: IProcessDirector ): void {
            this.updateParts( director );
        }


        // Fields

        private parts = new Array<IProcessViewPart>();
        private ticks: ITicksWidget;

        // Parts Utils

        private createParts(
            director: IProcessDirector,
            controller: IProcessController,
            observer: IProcessObserver,
            process: ProcessModel
        ) {
            this.addPart( this.ticks = new Display() );
            this.addPart( new InfoBar() );
            this.addPart( new MemberDialog( director ) );
            this.addPart( new Process.Members( director ) );
            this.addPart( new Answers( process.Answers, new Process.AutoAnswerCommand( controller, process.Id ) ) );
            this.updateParts( director );
        }

        private addPart( part: IProcessViewPart ) {
            this.parts.push( part );
            this.add( part );
        }

        private updateParts( director: IProcessDirector ) {
            this.parts.forEach( p => p.onProcessUpdated( director ) );
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