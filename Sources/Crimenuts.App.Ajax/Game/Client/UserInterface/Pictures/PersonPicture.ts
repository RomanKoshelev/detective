module Crimenuts {
    export class PersonPicture extends Phaser.Sprite {

        constructor( x: number, y: number, width: number, world: string="", name: string="" ) {
            this.imageWidth = width;
            super( app.game, x, y, "", 0 );
            if( world !== "" && name !== "" ) {
                this.setPerson( world, name );
            }
        }

        setPerson( world: string, name: string ) {
            this.imageKey = Assets.Sprites.getPersonKey( world, name, this.imageWidth );
            if( this.game.cache.checkImageKey( this.imageKey ) ) {
                this.onLoadComplete();
            } else {
                this.loadAsync( world, name );

                var defkey = Assets.Sprites.getPersonKey( world, name );
                if( this.game.cache.checkImageKey( defkey ) ) {
                    this.loadTexture( defkey );
                    this.updateScale();
                } else {
                    Assets.Sprites.loadPerson( world, name );
                }
            }
        }

        private imageKey: string;
        private imageWidth: number;

        private loadAsync( world: string, name: string ) {
            Assets.Sprites.loadPerson( world, name, this.imageWidth );
            this.game.load.onLoadComplete.addOnce( this.onLoadComplete, this );
            this.game.load.start();
        }

        private onLoadComplete() {
            this.loadTexture( this.imageKey );
            this.updateScale();
        }

        updateScale() {
            this.scale.set( this.imageWidth / this.texture.width );
        }
    }
}