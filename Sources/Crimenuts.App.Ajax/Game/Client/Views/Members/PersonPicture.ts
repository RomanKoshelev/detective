module Crimenuts {
    export class PersonPicture extends Phaser.Image {

        constructor( game: Phaser.Game, world: string, name: string, x: number, y: number, width: number ) {
            super( game, x, y, "", 0 );
            var loader = this.getLoader( world, name, width );
            this.imageKey = Assets.Sprites.getPersonKey( world, name, width );
            loader.onLoadComplete.addOnce( this.onLoadComplete, this );
            loader.start();
        }

        private imageKey: string;

        private getLoader( world: string, name: string, width: number ) {
            var loader = new Phaser.Loader( this.game );
            loader.image(
                Assets.Sprites.getPersonKey( world, name, width ),
                Assets.Sprites.getPersonUrl( world, name, width )
            );
            return loader;
        }

        private onLoadComplete() {
            this.loadTexture( this.imageKey, 0 );
        }
    }
}