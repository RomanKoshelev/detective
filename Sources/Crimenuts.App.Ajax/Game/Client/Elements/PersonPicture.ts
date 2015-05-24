module Crimenuts {
    export class PersonPicture extends Phaser.Image {

        constructor( game: Phaser.Game, world: string, name : string, x: number, y: number, size: number ) {
            var key = Assets.Sprites.getPersonKey( world, name, size );
            super( game, x, y, key, 0 );
        }
    }
}