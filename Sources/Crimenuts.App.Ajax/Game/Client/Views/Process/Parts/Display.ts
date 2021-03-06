module Crimenuts.View.Process {
    export class Display extends Phaser.Group implements IProcessViewPart, ITicksWidget {

        bottomBar: BottomBar;
        topBar: TopBar;

        constructor() {
            super( app.game );
            this.add( this.topBar = new TopBar() );
            this.add( this.bottomBar = new BottomBar() );
        }

        onProcessUpdated( director: IProcessDirector ): void {
            this.setCaseId( director.getProcessModel().CaseId );
        }

        updateTicks( count: number ) {
            this.setBottomText( `[${count}]` );
        }

        private setBottomText( text: string ) {
            this.bottomBar.text.setText(text);
        }

        private setCaseId( caseId: string ) {
            this.topBar.text.setText(`Crime Nuts, Case #${caseId}`);
        }
    }
}