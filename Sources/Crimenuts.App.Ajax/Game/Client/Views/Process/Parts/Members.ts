module Crimenuts.View.Process {

    export class Members extends Phaser.Group implements IProcessViewPart {

        constructor( position: Phaser.Point, model: ProcessModel ) {
            super( app.game );
            this.position = position;
            this.createMembers(model.World, model.Members);
        }

        updateModel( model: ProcessModel ): void {
            
        }

        static memberWidth = Settings.Process.Members.Member.width;
        static memberHeight = Settings.Process.Members.Member.height;
        static memberNumInRow = Settings.Process.Members.numInRow;

        private createMembers(world: string, members: string[]) {
            var w = Members.memberWidth;
            var h = Members.memberHeight;
            for( var i in members ) {
                var p = this.calcPersonCardPosition( i, w, h );
                var name = members[ i ];
                this.add( new Member( world, name, p.x, p.y, w, h ) );
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