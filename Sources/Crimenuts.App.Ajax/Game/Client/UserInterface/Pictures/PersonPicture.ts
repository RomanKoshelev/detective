module Crimenuts {
    export class PersonPicture extends Phaser.Image {

        constructor( x: number, y: number, width: number, world: string="", name: string="" ) {
            this.imageWidth = width;
            super( app.game, x, y, "", 0 );
            if( world!=="" && name !== "" ) {
                this.setPerson( world, name );
            }
        }

        setPerson( world: string, name: string ) {
            this.imageKey = Assets.Sprites.getPersonKey( world, name, this.imageWidth );
            if( this.game.cache.checkImageKey( this.imageKey ) ) {
                this.onLoadComplete();
            } else {
                this.visible = false;
                var loader = this.getLoader( world, name, this.imageWidth );
                loader.onLoadComplete.addOnce( this.onLoadComplete, this );
                loader.start();
            }
        }

        private imageKey: string;
        private imageWidth: number;

        private getLoader( world: string, name: string, width: number ) : Phaser.Loader {
            this.game.load.image(
                Assets.Sprites.getPersonKey( world, name, width ),
                Assets.Sprites.getPersonUrl( world, name, width )
            );
            return this.game.load;
        }

        private onLoadComplete() {
            this.loadTexture( this.imageKey, 0 );
            this.visible = true;
        }
    }
}