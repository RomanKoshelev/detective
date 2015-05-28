module Crimenuts.View.Process {
    export class Display extends Phaser.Group implements IProcessViewPart {

        bottomBar: BottomBar;
        topBar: TopBar;

        constructor( game: Phaser.Game ) {
            super( game );
            this.add( this.topBar = new TopBar( game ) );
            this.add( this.bottomBar = new BottomBar( game ) );
        }

        updateModel( model: ProcessModel ): void {
            this.setCaseId( model.CaseId );
        }

        setBottomText( text: string ) {
            this.bottomBar.text.setText(text);
        }

        private setCaseId( caseId: string ) {
            this.topBar.text.setText(`Crime Nuts, Case #${caseId}`);
        }
    }
}