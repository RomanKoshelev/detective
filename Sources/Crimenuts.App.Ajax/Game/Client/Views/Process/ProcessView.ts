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
            this.addPart( this.ticks = new Display( this.game ) );
            this.addPart( new StateBar( this.game, Settings.Process.Bars.StateBar.position ) );
            this.addPart( new InfoBar( this.game, Settings.Process.Bars.InfoBar.position) );
            this.addPart( new Members( this.game, Settings.Process.Members.position, model ) );
            this.addPart( new Answers( this.game, Settings.Process.Answers.position, model ) );

            this.add(
                new TextDecor(
                    new Button( this.game,() => this.clickedIt(), this ),
                "Text button")
                );
        }

        
        private addPart( part: any ) {
            this.parts.push( part );
            this.add( part );
        }

        clickedIt( ) {
            this.scale.set(0.5,0.5);
        }

        private updateParts( model: ProcessModel ) {
            this.parts.forEach( p => p.updateModel( model ) );
        }
    }
}