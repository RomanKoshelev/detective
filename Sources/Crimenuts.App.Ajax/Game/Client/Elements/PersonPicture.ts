module Crimenuts {
    export class PersonPicture extends Phaser.Image {

        constructor( game: Phaser.Game, world: string, name : string, size: number ) {
            var key = Assets.Sprites.getPersonKey( world, name, size );
            super( game, 100, 100, key, 0 );

//            this.resize(size);
        }

        private resize( size: number ) {
            this.scale.set( size / this.texture.width );
        }
    }
}