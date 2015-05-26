module Crimenuts {

    export class MemberCard extends Phaser.Group {

        static nameHeight = Settings.Process.Members.Card.Name.height;
        static nameFontSize = Settings.Process.Members.Card.Name.fontSize;
        static nameColor = Settings.Process.Members.Card.Name.color;
        static nameBgColor = Settings.Process.Members.Card.Name.bgColor;

        constructor( game: Phaser.Game, world: string, member: string, x: number, y: number, w: number, h: number ) {
            super( game );
            this.position.set( x, y );
            var name = member;
            this.createPicture( game, world, name, w,h);
            this.createNameBox( game, name, w, h);
        }
        
        private picture: PersonPicture;
        private nameLabel: TextLabel;

        private createPicture( game: Phaser.Game, world: string, name: string, w: number, h: number ) {
            this.add( this.picture = new PersonPicture( game, world, name, 0, 0, w) );
            this.picture.anchor.set( 0, 1 );
            this.picture.position.y = h - MemberCard.nameHeight;
        }

        private createNameBox( game: Phaser.Game, name: string, width: number , height: number ) {
            var w = width;
            var h = MemberCard.nameHeight;
            var fs = MemberCard.nameFontSize;
            var x = 0;
            var y = height - h;

            this.add( this.nameLabel = new TextLabel( game, name, x, y, w, h, fs, MemberCard.nameColor, MemberCard.nameBgColor ) );
        }
    }
}