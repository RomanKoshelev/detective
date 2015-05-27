module Crimenuts.View.Process {
    export class ProcessView extends Phaser.Group {

        constructor( game: Phaser.Game, model: ProcessModel ) {
            super( game );
            this.game.stage.backgroundColor = Settings.Process.bgColor;

            this.createUi();

            this.createStateBar();
            this.createInfoBar();

            this.createMembers( model );

            this.updateModel( model );
        }

        updateModel( model: ProcessModel ) {
            this.screen.setCaseId( model.CaseId );
            this.stateBar.setState( model.State );
            this.infoBar.setInfo( model.Today, model.TodayVictim, model.TodayPrisoner, model.ActiveMurderersNum);
        }

        updateTickCount( count: number ) {
            this.screen.setBottomText( `[${count}]` );
        }

        private screen: UiScreen;
        private members: Members;
        private stateBar: StateBar;
        private infoBar: InfoBar;

        private createStateBar() {
            this.stateBar = new StateBar( this.game );
            this.stateBar.position = Settings.Process.StateBar.position;
        }

        private createInfoBar() {
            this.infoBar = new InfoBar( this.game );
            this.infoBar.position = Settings.Process.InfoBar.position;
        }

        private createMembers( model: ProcessModel ) {
            this.members = new Members( this.game, model.World, model.Members );
            this.members.position = Settings.Process.Members.position;
        }

        private createUi() {
            this.screen = new UiScreen( this.game );
        }
    }
}