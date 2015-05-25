module Crimenuts {

    export class ProcessMembers extends Phaser.Group {

        constructor( game: Phaser.Game, world: string, members: string[] ) {
            super( game );
            this.model = members;
            this.world = world;
            this.createMembers();
        }

        private world: string;
        private model: string[];

        static memberWidth = 120;
        static memberHeight = 150;
        static memberNumInRow = 6;

        private createMembers() {
            var w = ProcessMembers.memberWidth;
            var h = ProcessMembers.memberHeight;
            for( var i in this.model ) {
                var p = this.calcPersonCardPosition( i, w, h );
                var name = this.model[ i ];
                this.add( new MemberCard( this.game, this.world, name, p.x, p.y, w, h ) );
            }
        }

        private calcPersonCardPosition( i: number, w: number, h: number ): Phaser.Point {
            var n = ProcessMembers.memberNumInRow;
            var x = ( i % n ) * w * 1.2;
            var y = Math.floor( i / n ) * h * 1.2;
            return new Phaser.Point( x, y );
        }
    }
}