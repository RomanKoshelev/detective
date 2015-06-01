module Crimenuts.View.Process {

    export class Member extends Phaser.Group {

        static nameHeight = Settings.Process.Members.Member.Name.height;
        static nameFontSize = Settings.Process.Members.Member.Name.fontSize;
        static nameColor = Settings.Process.Members.Member.Name.color;
        static nameBgColor = Settings.Process.Members.Member.Name.bgColor;

        constructor( world: string, member: string, x: number, y: number, w: number, h: number ) {
            super( app.game );
            this.position.set( x, y );
            var name = member;
            this.createPicture( world, name, w,h);
            this.createNameBox( name, w, h);
        }
        
        private picture: PersonPicture;
        private nameLabel: TextLabel;

        private createPicture( world: string, name: string, w: number, h: number ) {
            this.add( this.picture = new PersonPicture( world, name, 0, 0, w) );
            this.picture.anchor.set( 0, 1 );
            this.picture.position.y = h - Member.nameHeight;
        }

        private createNameBox( name: string, width: number , height: number ) {
            this.add( this.nameLabel = new TextLabel( width, Member.nameHeight,
                Settings.Default.Font.face,
                Member.nameFontSize,
                Member.nameColor,
                Member.nameBgColor ) );
            this.nameLabel.setText( name );
            this.nameLabel.alignCenter();
            this.nameLabel.position.set( 0, height - Member.nameHeight );
        }
    }
}