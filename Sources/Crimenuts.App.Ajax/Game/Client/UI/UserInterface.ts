module Crimenuts {
    export class UserInterface {
        private items: Phaser.Group;

        constructor( game: Phaser.Game ) {
            this.items = game.add.group();
            this.items.add( new TopBar( game ) );
            this.items.add( new BottomBar( game ) );
        }
    }
}