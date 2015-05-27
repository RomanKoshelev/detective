module Crimenuts {
    export class UiScreen extends Phaser.Group {

        bottomBar: BottomBar;
        topBar: TopBar;

        constructor( game: Phaser.Game ) {
            super( game );
            this.add( this.topBar = new TopBar( game ) );
            this.add( this.bottomBar = new BottomBar( game ) );
        }


        setBottomText( text: string ) {
            this.bottomBar.text.setText(text);
        }

        setCaseId( caseId: string ) {
            this.topBar.text.setText(`Crime Nuts Case #${caseId}`);
        }
    }
}