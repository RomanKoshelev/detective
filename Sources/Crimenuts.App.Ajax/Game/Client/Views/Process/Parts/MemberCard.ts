﻿/// <reference path="../../../UserInterface/Buttons/ButtonEssence.ts" />

module Crimenuts.View.Process {
    export class MemberCard extends Phaser.Group implements IMemberCard {

        // IMemberCard
        setMember( memberId: number ) {
            this.memberId = memberId;
            var member = this.getMemberModel( memberId );
            this.updatePicture( member.World, member.Name );
            this.updateName( member.Name );
            this.updateAnswer( memberId );
            this.updateShade( memberId );
            this.updateSpot( memberId );
            this.updateSign( memberId );
        }

        setCommand( command: Command ) {
            this.button.visible = true;
            this.button.setCommand( command );
        }

        getAnswerCard(): IMemberCard {
            return this.answer;
        }

        getMemberId(): number {
            return this.memberId;
        }

        // Overrides
        update() {
            super.update();
            //this.updateFrame();
        }

        // Ctor
        constructor(
            director: IProcessDirector,
            memberId: number,
            x: number, y: number, w: number, h: number,
            command = Command.nothing,
            hasNameLabel = true,
            answerLevel = 1,
            hasSign = false
        ) {
            super( app.game );
            this.director = director;
            this.position.set( x, y );

            var member = this.getMemberModel( memberId );

            this.createNameLabel( member.Name, w, h, hasNameLabel );
            this.createSpot( w, h );
            this.createAnswer( answerLevel, w, h, command );
            this.createPicture( member.World, member.Name, w, h );
            this.createSign( w, h, hasSign );
            this.createShade();
            this.createButton( command, w, h );
            this.createFrame();

            this.setMember( memberId );
        }

        // Fields
        private director: IProcessDirector;
        private memberId: number;
        private picture: PersonPicture;
        private button: ButtonEssence;
        private nameLabel: TextLabel;
        private spot: Phaser.Graphics;
        private superCard: MemberCard = null;
        private answer: MemberCard = null;
        private shade: Phaser.Graphics;
        private spotEllipse = new PIXI.Rectangle();
        private shadeRect = new PIXI.Rectangle();
        private answerCode = AnswerCode.Unknown;
        private frame: Phaser.Graphics;
        private sign: Picture;

        // Create
        private createSign( width: number, height: number, hasSign: boolean ) {
            if( !hasSign ) {
                return;
            }
            var ks = Settings.Process.Members.Card.Sign.sizeRate;
            var kx = Settings.Process.Members.Card.Sign.xRate;
            var ky = Settings.Process.Members.Card.Sign.yRate;

            var s = width * ks;
            this.sign = new Picture( s );
            this.sign.anchor.set( 0.5, 0.5 );
            this.sign.x = width * kx;
            this.sign.y = height * ky;
            this.add( this.sign );
        }

        private createSpot( width: number, height: number ) {
            this.spot = new Phaser.Graphics( app.game, 0, 0 );
            this.spotEllipse.width = width / 2;
            this.spotEllipse.height = this.spotEllipse.width * Settings.Process.Members.Card.Spot.heightRate;
            this.spotEllipse.x = width / 2;
            this.spotEllipse.y = height - this.spotEllipse.height - Settings.Process.Members.Card.Name.height;
            this.setSpotColor( 0 );
            this.add( this.spot );
        }

        private createAnswer(
            level: number,
            w: number,
            h: number,
            command: ICommand
        ) {
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
                command,
                false, // hasNameLabel
                level - 1,
                true // hasSign
            );
            this.answer.superCard = this;
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
            this.picture = new PersonPicture( 0, 0, sz, world, name );
            this.picture.anchor.set( 0.5, 1 );
            this.picture.position.x = w / 2;
            this.picture.position.y = ph;
            this.add( this.picture );
        }

        private createNameLabel( name: string, width: number, height: number, hasNameLabel: boolean ) {
            if( !hasNameLabel ) {
                return;
            }

            this.nameLabel = new TextLabel( width,
                Settings.Process.Members.Card.Name.height,
                Settings.Default.Font.face,
                Settings.Process.Members.Card.Name.fontSize,
                Settings.Process.Members.Card.Name.color,
                Settings.Process.Members.Card.Name.bgColor
            );
            this.nameLabel.setText( name );
            this.nameLabel.alignCenter();
            this.nameLabel.position.set( 0, height - this.nameLabel.height );
            this.add( this.nameLabel );
        }

        private createButton( command: ICommand, w: number, h: number ) {
            h -= this.nameLabel == null ? Settings.Process.Members.Card.Name.height : 0;
            this.button = new ButtonEssence( command, w, h );
            if( command === Command.nothing ) {
                this.button.visible = false;
            }
            this.add( this.button );
        }

        private createFrame() {
            this.frame = new Phaser.Graphics( app.game, 0, 0 );
            this.add( this.frame );
        }

        private createShade() {
            this.shade = new Phaser.Graphics( app.game, 0, 0 );
            this.add( this.shade );
        }


        // Set
        private setSign( rel: RelationCode ) {
            var pict = Settings.Process.Members.Card.Sign.picture[ RelationCode[ rel ] ];
            this.sign.setPicture( pict );
        }

        private setShade( shade ) {
            this.shadeRect = this.getLocalBounds();

            var color = 0x000000;
            this.shade.clear();
            this.shade.lineStyle( 0 );
            this.shade.beginFill( color, shade );
            this.shade.drawRect( this.shadeRect.x, this.shadeRect.y, this.shadeRect.width, this.shadeRect.height );
            this.shade.endFill();
        }

        private setSpotColor( color: number ) {
            this.spot.clear();
            this.spot.beginFill( color );
            this.spot.drawEllipse( this.spotEllipse.x, this.spotEllipse.y, this.spotEllipse.width, this.spotEllipse.height );
            this.spot.endFill();
        }

        //Update
        private updateSign( memberId: number ) {
            if( this.answer == null ) return;
            if( this.answer.sign == null ) return;

            var model = this.getMemberModel( memberId );
            if( model.TodayAnswer.IsValid ) {
                this.answer.sign.visible = true;
                this.answer.setSign( RelationCode[ model.TodayAnswer.SubjectRelation ] );
            } else {
                this.answer.sign.visible = false;
            }
        }

        private updatePicture( world: string, name: string ) {
            this.picture.setPerson( world, name );
        }

        private updateSpot( memberId: number ) {
            if( this.superCard == null ) {
                this.answerCode = AnswerCode[ this.getMemberModel( memberId ).Annotation ];
            }
            var color = Settings.Process.Members.Card.Spot.color[ AnswerCode[ this.answerCode ] ];
            this.setSpotColor( color );
        }

        private updateAnswer( memberId: number ) {
            if( this.answer == null ) return;

            var model = this.getMemberModel( memberId );
            if( model.TodayAnswer.IsValid ) {
                this.answer.answerCode = AnswerCode[ model.TodayAnswer.AnswerCode ];
                this.answer.setMember( model.TodayAnswer.SubjectId );
                this.answer.visible = true;
            } else {
                this.answer.visible = false;
                this.answer.answerCode = AnswerCode.Unknown;
            }
        }

        private updateShade( memberId: number ) {
            var model = this.getMemberModel( memberId );
            if( model.IsActive ) {
                this.setShade( 0 );
            } else {
                this.setShade( Settings.Process.Members.Card.inaciveShade );
            }
        }

        private updateFrame() {
            this.frame.clear();
            var bounds = this.getLocalBounds();
            this.frame.lineStyle( 1, 0x444444 );
            this.frame.drawRect( bounds.x, bounds.y, bounds.width, bounds.height );
        }

        private updateName( name: string ) {
            if( this.nameLabel != null ) {
                this.nameLabel.setText( name );
            }
        }

        // Model
        private getMemberModel( memberId: number ): MemberModel {
            return this.director.getProcessModel().Members[ memberId ];
        }
    }
}