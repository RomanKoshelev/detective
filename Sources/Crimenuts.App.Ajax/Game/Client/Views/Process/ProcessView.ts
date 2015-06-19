/// <reference path="../../Commands/Process/AutoAnswerCommand.ts" />

module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group implements IProcessViewPart, IStateView {

        // IStateView
        getRootGroup(): Phaser.Group {
             return this;
        }

        // IProcessViewPart
        onProcessUpdated( director: IProcessDirector ): void {
            this.updateParts( director );
        }

        // Ctor
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
            var cmdMark = new MemberMarkCommand( controller, process.Id );
            var cmdArrest = new MemberArrestCommand( controller, process.Id );
            var cmdAutoAnswer = new AutoAnswerCommand( controller, process.Id );

            this.addPart( this.ticks = new Display() );
            this.addPart( new Answers( process.Answers, cmdAutoAnswer ) );
            this.addPart( new MemberDialog( director, cmdMark, cmdArrest ) );
            this.addPart( new Members( director ) );
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