module Crimenuts {
    export class UserInterfaceView {

        private items: Phaser.Group;
        bottomBar: BottomBar;
        topBar: TopBar;

        constructor( game: Phaser.Game ) {
            this.items = game.add.group();
            this.items.add( this.topBar = new TopBar( game ) );
            this.items.add( this.bottomBar = new BottomBar( game ) );
        }

        setBottomText( text: string ) {
            this.bottomBar.text.setText(text);
        }

        setCaseId( caseId: string ) {
            this.topBar.text.setText(`Crime Nuts Case #${caseId}`);
        }
    }
}