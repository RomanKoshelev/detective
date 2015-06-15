/// <reference path="../../../UserInterface/Buttons/ButtonEssence.ts" />

module Crimenuts.View.Process {
    export class MemberCard extends Phaser.Group {

        static nameHeight = Settings.Process.Members.Card.Name.height;
        static nameFontSize = Settings.Process.Members.Card.Name.fontSize;
        static nameColor = Settings.Process.Members.Card.Name.color;
        static nameBgColor = Settings.Process.Members.Card.Name.bgColor;

        constructor( member: MemberModel, x: number, y: number, w: number, h: number, command: Command ) {
            super( app.game );
            this.position.set( x, y );
            var name = member;
            this.createButton( w, h, command );
            this.createPicture( member.World, member.Name, w, h );
            this.createNameBox( member.Name, w, h );
        }

        private picture: PersonPicture;
        private button: PIXI.DisplayObject;
        private nameLabel: TextLabel;

        private createPicture( world: string, name: string, w: number, h: number ) {
            this.add( this.picture = new PersonPicture( 0, 0, w, world, name ) );
            this.picture.anchor.set( 0, 1 );
            this.picture.position.y = h - MemberCard.nameHeight;
        }

        private createNameBox( name: string, width: number, height: number ) {
            this.add( this.nameLabel = new TextLabel( width, MemberCard.nameHeight,
                Settings.Default.Font.face,
                MemberCard.nameFontSize,
                MemberCard.nameColor,
                MemberCard.nameBgColor ) );
            this.nameLabel.setText( name );
            this.nameLabel.alignCenter();
            this.nameLabel.position.set( 0, height - MemberCard.nameHeight );
        }

        private createButton( w: number, h: number, command: Command ) {
            this.add( this.button = new ButtonEssence( command, w, h ) );
        }
    }
}