 module Crimenuts {
    export class ProcessMembersView {

        constructor( game: Phaser.Game, world: string, members: string[] ) {
            this.game = game;
            this.members = members;
            this.world = world;
            this.items = new Phaser.Group( game );
            this.createMembers();
        }

        private game: Phaser.Game;
        private items: Phaser.Group;
        private world: string;
        private members: string[];

        private getMembersNamesList() {
            var names = "";
            this.members.forEach( m => {
                names += m + " ";
            } );
            return names;
        }

        private createMembers() {
            var size  = 120;
            var loader = new Phaser.Loader( this.game );

            this.members.forEach( name => {
                loader.image(
                    Assets.Sprites.getPersonKey( this.world, name, size ),
                    Assets.Sprites.getPersonUrl( this.world, name, size ) );
            });

            loader.onLoadComplete.addOnce( this.createMembersWhenImagesLoaded, this );
            loader.start();
        }

        private createMembersWhenImagesLoaded() {
            var size = 120;
            var i = 0;
            var n = 6;
            var x = 0;
            var y = 50;
            this.members.forEach( name => {
                if( i === n ) {
                    x = 0;
                    y += size*1.5;
                }
                i++;
                this.items.add( new PersonPicture( this.game, this.world, name, x, y, size ) );
                x += size;
            });            
        }
    }
}