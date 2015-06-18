module Crimenuts {
    export class Picture extends Phaser.Sprite {

        constructor( name: string, width: number=Settings.Default.Assets.pictureSize ) {
            super( app.game, 0, 0 );
            this.imageWidth = width;
            this.setPicture( name );
        }

        setPicture( name: string ) {
            this.imageKey = Assets.Sprites.getPictureKey( name, this.imageWidth );
            if( this.game.cache.checkImageKey( this.imageKey ) ) {
                this.onLoadComplete();
            } else {
                this.setDefaultImage();
                this.loadAsync( name );
            }
        }

        private imageKey: string;
        private imageWidth: number;

        private loadAsync( name: string ) {
            Assets.Sprites.loadPicture( name, this.imageWidth );
            this.game.load.onLoadComplete.addOnce( this.onLoadComplete, this );
            this.game.load.start();
        }

        private onLoadComplete() {
            this.loadTexture( this.imageKey );
            this.updateScale();
        }

        private updateScale() {
            this.scale.set( this.imageWidth / this.texture.width );
        }

        private setDefaultImage() {
            this.loadTexture( Settings.Assets.Sprites.transparent );
            this.updateScale();
        }
    }
}