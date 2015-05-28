module Crimenuts.View.Process {

    export class Answers extends Phaser.Group implements IProcessViewPart {

        constructor( game: Phaser.Game, world: string, members: string[] ) {
            super( game );
            this.model = members;
            this.createAnswers();
        }

        updateModel( processModel: ProcessModel ): void {
            
        }

        private world: string;
        private model: string[];

        private createAnswers() {
        }

    }
}