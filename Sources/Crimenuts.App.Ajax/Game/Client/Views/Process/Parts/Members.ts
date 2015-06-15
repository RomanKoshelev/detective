/// <reference path="../../../Commands/MemberDialogCommand.ts" />
module Crimenuts.View.Process {

    export class Members extends Phaser.Group implements IProcessViewPart {

        constructor( model: ProcessModel ) {
            super( app.game );
            this.position = Settings.Process.Members.position.clone();
            this.createMembers( model.World, model.Members );
        }

        onUpdateProcess( model: ProcessModel ): void {
            // do nothing
        }

        static memberWidth = Settings.Process.Members.Card.width;
        static memberHeight = Settings.Process.Members.Card.height;
        static memberNumInRow = Settings.Process.Members.numInRow;

        private createMembers( world: string, members: MemberModel[] ) {
            var w = Members.memberWidth;
            var h = Members.memberHeight;
            for( var i in members ) {
                var p = this.calcPersonCardPosition( i, w, h );
                this.add( new MemberCard( members[ i ], p.x, p.y, w, h,
                    new MemberDialogCommand( i )
                ) );
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