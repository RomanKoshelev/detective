module Crimenuts {
    export class ProcessView extends Phaser.Group {

        constructor( game: Phaser.Game, model: ProcessModel ) {
            super( game );
                this.game.stage.backgroundColor = Settings.Process.bgColor;

                this.createUi();
                this.createStateBar();
                this.createMembers(model);

                this.updateModel( model );
        }

        updateModel(model: ProcessModel ) {
            this.screen.setCaseId( model.CaseId );
            this.stateBar.setState( model.State );
        }

        updateTickCount(count: number) {
            this.screen.setBottomText( `[${count}]` );
        }

        private screen: UiScreen;
        private members: Members;
        private stateBar: ProcessStateBar;

        private createStateBar() {
            this.stateBar = new ProcessStateBar( this.game );
            this.stateBar.position = Settings.Process.StateBar.position;
        }

        private createMembers(model: ProcessModel ) {
            this.members = new Members( this.game, model.World, model.Members );
            this.members.position = Settings.Process.Members.position;
        }
        
        private createUi() {
            this.screen = new UiScreen( this.game );
        }
       
    }
}