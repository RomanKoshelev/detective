/// <reference path="../../../UserInterface/Buttons/ButtonEssence.ts" />

module Crimenuts.View.Process {
    export class MemberCard extends Phaser.Group {

        static nameHeight = Settings.Process.Members.Card.Name.height;
        static nameFontSize = Settings.Process.Members.Card.Name.fontSize;
        static nameColor = Settings.Process.Members.Card.Name.color;
        static nameBgColor = Settings.Process.Members.Card.Name.bgColor;

        public showName = true;

        constructor( member: MemberModel, x: number, y: number, w: number, h: number, command: Command = Command.nothing ) {
            super( app.game );
            this.position.set( x, y );
            this.createButton( w, h, command );
            this.createNameLabel( member.Name, w, h );
            this.createSpot( w, h );
            this.createPicture( member.World, member.Name, w, h );
            //this.createFrame( w, h );
        }

        setMember( member: MemberModel ) {
            this.picture.setPerson( member.World, member.Name );
            this.nameLabel.setText( member.Name );
        }

        update() {
            this.nameLabel.visible = this.showName;
        }

        private picture: PersonPicture;
        private button: PIXI.DisplayObject;
        private nameLabel: TextLabel;
        private spot: Phaser.Graphics;

        private createPicture( world: string, name: string, w: number, h: number ) {
            var dx = this.spot.height / 2 * ( 1 - Settings.Process.Members.Card.footShiftRate );
            var pw = w - dx;
            var ph = h - MemberCard.nameHeight - dx;
            var sz = Math.min( pw, ph );
            this.add( this.picture = new PersonPicture( 0, 0, sz, world, name ) );
            this.picture.anchor.set( 0.5, 1 );
            this.picture.position.x = w / 2;
            this.picture.position.y = h - MemberCard.nameHeight - dx;
        }

        private createNameLabel( name: string, width: number, height: number ) {
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

        private createSpot( width: number, height: number ) {
            this.spot = new Phaser.Graphics( app.game, 0, 0 );
            this.add( this.spot );

            var k = 0.2;
            var w = width / 2;
            var h = w * k;
            var x = width / 2;
            var y = height - h - MemberCard.nameHeight;

            this.spot.beginFill( 0x222222 );
            this.spot.drawEllipse( x, y, w, h );
            this.spot.endFill();
        }

        createFrame( w: number, h: number ) {
            this.spot.lineStyle( 1, 0x1111111 );
            this.spot.drawRect( 0, 0, w, h );
        }
    }
}