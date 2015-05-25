module Crimenuts {

    export class MemberCard extends Phaser.Group {

        static nameHeight;
        static nameFontSize;

        constructor( game: Phaser.Game, world: string, member: string, x: number, y: number, width: number, height: number ) {
            super( game );
            this.position.set( x, y );
            var name = member;
            this.createPicture( game, world, name, width);
            this.createNameBox( game, name, width, height);
        }
        
        private picture: PersonPicture;
        private nameBox: TextBox;

        private createPicture( game: Phaser.Game, world: string, name: string, width: number ) {
            this.add( this.picture = new PersonPicture( game, world, name, 0, 0, width ) );
        }

        private createNameBox( game: Phaser.Game, name: string, width: number , height: number ) {
            var w = width;
            var h = MemberCard.nameHeight;
            var fs = MemberCard.nameFontSize;
            var x = 0;
            var y = height - h;

            this.add( this.nameBox = new TextBox( game, name, x, y, w, h, fs ) );
        }
    }
}