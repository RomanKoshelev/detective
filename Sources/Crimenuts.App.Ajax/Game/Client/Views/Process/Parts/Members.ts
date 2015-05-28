module Crimenuts.View.Process {

    export class Members extends Phaser.Group implements IProcessViewPart {

        constructor( game: Phaser.Game, world: string, members: string[] ) {
            super( game );
            this.model = members;
            this.world = world;
            this.createMembers();
        }

        updateModel( processModel: ProcessModel ): void {
            
        }

        private world: string;
        private model: string[];

        static memberWidth = Settings.Process.Members.Card.width;
        static memberHeight = Settings.Process.Members.Card.height;
        static memberNumInRow = Settings.Process.Members.numInRow;

        private createMembers() {
            var w = Members.memberWidth;
            var h = Members.memberHeight;
            for( var i in this.model ) {
                var p = this.calcPersonCardPosition( i, w, h );
                var name = this.model[ i ];
                this.add( new MemberCard( this.game, this.world, name, p.x, p.y, w, h ) );
            }
        }

        private calcPersonCardPosition( i: number, w: number, h: number ): Phaser.Point {
            var n = Members.memberNumInRow;
            var x = ( i % n ) * w * 1.2;
            var y = Math.floor( i / n ) * h * 1.2;
            return new Phaser.Point( x, y );
        }

    }
}