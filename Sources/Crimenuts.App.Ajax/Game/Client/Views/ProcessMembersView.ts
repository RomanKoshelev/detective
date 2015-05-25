module Crimenuts {
    export class ProcessMembersView extends Phaser.Group {

        constructor( game: Phaser.Game, world: string, members: string[] ) {
            super( game );
            this.model = members;
            this.world = world;
            this.createMembers();
        }

        private world: string;
        private model: string[];

        private createMembers() {
            var loader = this.getLoader();
            loader.onLoadComplete.addOnce( this.doCreateMembers, this );
            loader.start();
        }

        static memberWidth = 120;
        static memberNumInRow = 6;

        private getLoader() {
            var loader = new Phaser.Loader( this.game );
            this.model.forEach( name => {
                loader.image(
                    Assets.Sprites.getPersonKey( this.world, name, ProcessMembersView.memberWidth ),
                    Assets.Sprites.getPersonUrl( this.world, name, ProcessMembersView.memberWidth ) );
            } );
            return loader;
        }

        private doCreateMembers() {
            var width = ProcessMembersView.memberWidth;
            for( var i in this.model ) {
                var pos = this.calcPersonCardPosition( i, width );
                var name = this.model[ i ];
                this.add( new PersonPicture( this.game, this.world, name, pos.x, pos.y, width ) );
            }
        }

        private calcPersonCardPosition( i: number, size: number ): Phaser.Point {
            var n = ProcessMembersView.memberNumInRow;
            var x = ( i % n ) * size;
            var y = Math.floor( i / n ) * size * 1.5;

            return new Phaser.Point( x, y );
        }

    }
}