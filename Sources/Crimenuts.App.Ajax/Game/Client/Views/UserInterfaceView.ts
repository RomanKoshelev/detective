module Crimenuts {
    export class UserInterfaceView {
        private items: Phaser.Group;
        bottomBar: BottomBar;

        constructor( game: Phaser.Game ) {
            this.items = game.add.group();
            this.items.add( new TopBar( game ) );
            this.items.add( this.bottomBar = new BottomBar( game ) );
        }

        setBottomText( text: string ) {
            this.bottomBar.text.setText(text);
        }
    }
}