/// <reference path="../../../Commands/MemberDialogCommand.ts" />
module Crimenuts.View.Process {

    export class Members extends Phaser.Group implements IProcessViewPart {

        constructor(
            director: IProcessDirector
        ) {
            super( app.game );
            this.position = Settings.Process.Members.position.clone();
            this.createMembers( director );
        }

        onProcessUpdated( director: IProcessDirector ): void {
            var process = this.director.getProcessModel();
            for( var i in process.Members ) {
                this.cards[ i ].setMember( i);
            }
        }

        private cards = new Array<IMemberCard>();
        private director: IProcessDirector;

        private createMembers(
            director: IProcessDirector
        ) {
            this.director = director;
            var w = Settings.Process.Members.Card.width;
            var h = Settings.Process.Members.Card.height;

            var process = director.getProcessModel();
            for( var i in process.Members ) {
                var p = this.calcPersonCardPosition( i, w, h );
                var card = new MemberCard( director, i, p.x, p.y, w, h,
                    new MemberDialogCommand( i )
                );
                this.add( card );
                this.cards.push( card );
            }
        }

        private calcPersonCardPosition( i: number, w: number, h: number ): Phaser.Point {
            var n = Settings.Process.Members.numInRow;
            var x = ( i % n ) * w * 1.2;
            var y = Math.floor( i / n ) * h * 1.2;
            return new Phaser.Point( x, y );
        }
    }
}