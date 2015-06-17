/// <reference path="../../../UserInterface/Buttons/ButtonEssence.ts" />

module Crimenuts.View.Process {
    export class MemberCard extends Phaser.Group implements IMemberCard {

        // IMemberCard

        showName = true;

        setMember( memberId: number ) {
            var member = this.getMemberModel( memberId );
            this.picture.setPerson( member.World, member.Name );
            this.nameLabel.setText( member.Name );
            this.updateAnswer( memberId );
            this.updateShade( memberId );
            this.updateSpot( memberId );
        }

        // Overrides

        update() {
            this.nameLabel.visible = this.showName;
            super.update();
        }

        // Ctor

        constructor(
            director: IProcessDirector,
            memberId: number,
            x: number, y: number, w: number, h: number,
            command = Command.nothing,
            answerLevel = 1
        ) {
            super( app.game );
            this.director = director;
            this.position.set( x, y );

            var member = this.getMemberModel( memberId );

            this.createNameLabel( member.Name, w, h );
            this.createSpot( w, h );
            this.createAnswer( answerLevel, w, h );
            this.createPicture( member.World, member.Name, w, h );
            this.createButton( w, h, command );
            this.createShade( w, h );
            //this.createFrame( w, h );

            this.setMember( memberId );
        }

        // Fields

        private director: IProcessDirector;
        private picture: PersonPicture;
        private button: PIXI.DisplayObject;
        private nameLabel: TextLabel;
        private spot: Phaser.Graphics;
        private answer: MemberCard = null;
        private shade: Phaser.Graphics;
        private spotEllipse = new PIXI.Rectangle();

        // Utils

        private createSpot( width: number, height: number ) {
            this.add( this.spot = new Phaser.Graphics( app.game, 0, 0 ) );

            this.spotEllipse.width = width / 2;
            this.spotEllipse.height = this.spotEllipse.width * Settings.Process.Members.Card.Spot.heightRate;
            this.spotEllipse.x = width / 2;
            this.spotEllipse.y = height - this.spotEllipse.height - Settings.Process.Members.Card.Name.height;
            this.setSpotColor( 0 );
        }

        private updateSpot( memberId: number ) {
            var member = this.getMemberModel( memberId );
            var answerCode = member.TodayAnswer.AnswerCode;
            var color = Settings.Process.Members.Card.Spot.color[answerCode];
            //color = 0xffffff;
            this.setSpotColor( color );
        }

        private setSpotColor( color: number ) {
            this.spot.clear();
            this.spot.beginFill( color );
            this.spot.drawEllipse( this.spotEllipse.x, this.spotEllipse.y, this.spotEllipse.width, this.spotEllipse.height);
            this.spot.endFill();
        }


        createAnswer( level: number, w: number, h: number ) {
            if( level < 1 ) return;

            var k = Settings.Process.Members.Card.Answer.sizeRate;
            var wk = Settings.Process.Members.Card.Answer.xRate;
            var hk = Settings.Process.Members.Card.Answer.yRate;

            var kk = Math.pow( k, level );
            var mx = w * wk;
            var my = h * hk;
            var mw = w * kk;
            var mh = h * kk;

            this.answer = new MemberCard(
                this.director,
                0,
                mx, my, mw, mh,
                Command.nothing,
                level - 1
            );
            this.answer.showName = false;
            this.answer.visible = true;
            this.answer.picture.tint = Settings.Process.Members.Card.Answer.tintColor;
            this.add( this.answer );
        }

        private createPicture( world: string, name: string, w: number, h: number ) {
            var nh = Settings.Process.Members.Card.Name.height;
            var dx = this.spot.height / 2 * ( 1 - Settings.Process.Members.Card.Spot.footShiftRate );
            var pw = w - dx;
            var ph = h - nh - dx;
            var sz = Math.min( pw, ph );
            this.add( this.picture = new PersonPicture( 0, 0, sz, world, name ) );
            this.picture.anchor.set( 0.5, 1 );
            this.picture.position.x = w / 2;
            this.picture.position.y = ph;
        }

        private createNameLabel( name: string, width: number, height: number ) {
            this.add( this.nameLabel = new TextLabel( width,
                Settings.Process.Members.Card.Name.height,
                Settings.Default.Font.face,
                Settings.Process.Members.Card.Name.fontSize,
                Settings.Process.Members.Card.Name.color,
                Settings.Process.Members.Card.Name.bgColor
            ) );
            this.nameLabel.setText( name );
            this.nameLabel.alignCenter();
            this.nameLabel.position.set( 0, height - this.nameLabel.height );
        }

        private createButton( w: number, h: number, command: Command ) {
            this.add( this.button = new ButtonEssence( command, w, h ) );
        }

        private createFrame( w: number, h: number ) {
            this.spot.lineStyle( 1, 0x222222 );
            this.spot.drawRect( 0, 0, w, h );
        }

        private updateAnswer( memberId: number ) {
            if( this.answer === null ) return;

            var model = this.getMemberModel( memberId );
            if( model.TodayAnswer.IsValid ) {
                this.answer.setMember( model.TodayAnswer.SubjectId );
                this.answer.visible = true;
            } else {
                this.answer.visible = false;
            }
        }

        private createShade( w: number, h: number ) {
            this.add( this.shade = new Phaser.Graphics( app.game, 0, 0 ) );
        }

        private updateShade( memberId: number ) {
            var model = this.getMemberModel( memberId );
            if( model.IsActive ) {
                this.setShade( 0 );
            } else {
                this.setShade( Settings.Process.Members.Card.inaciveShade );
            }
        }

        private setShade( shade ) {
            this.shade.clear();
            this.shade.lineStyle( 0 );
            this.shade.beginFill( 0x000000, shade );
            this.shade.drawRect( 0, 0, this.width, this.height );
            this.shade.endFill();
        }

        private getMemberModel( memberId: number ): MemberModel {
            return this.director.getProcessModel().Members[ memberId ];
        }
    }
}