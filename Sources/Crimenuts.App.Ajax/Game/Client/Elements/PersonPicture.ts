module Crimenuts {
    export class PersonPicture extends Phaser.Image {
        worldName: string;
        personName: string;

        constructor( game: Phaser.Game, worldName : string, personName : string, size: number ) {
            var key = Assets.Sprites.preloadPerson( worldName, personName );
            super( game, 100, 100, key, 0 );

            this.worldName = worldName;
            this.personName = personName;
            this.resize(size);
        }

        resize( size: number ) {
            this.scale.set( size / this.texture.width );
        }
    }
}