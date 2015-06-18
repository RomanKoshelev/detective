module Crimenuts.View.Process {
    export class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {

        static instance: IMemberDialog;

        constructor(
            director: IProcessDirector
        ) {
            super( app.game );
            this.position = Settings.Process.Members.Dialog.position.clone();
            this.director = director;

            this.createFrameDecoration();
            this.createMemberCard();
            this.createTitle();

            MemberDialog.instance = this;
        }

        setMember( memberId: number ) {
            this.memberId = memberId;
            var member = this.getMemberModel();
            var name = member.Name;
            this.memberCard.setMember( memberId );
            this.title.setText( `${name}:\n"${member.TodayAnswer.AnswerDiaogText}"` );
            this.updateAnswerCardCommand();
        }

        onProcessUpdated( director: IProcessDirector ): void {
            this.setMember( this.memberId );
        }

        private director: IProcessDirector;
        private controller: IProcessController;

        private memberId = 0;
        private title: TextLabel;
        private memberCard: MemberCard;

        private createFrameDecoration() {
            this.add(
                new RectangleDecor(
                    new BracketDecor(
                        new Decorable(
                            Settings.Process.Members.Dialog.width,
                            Settings.Process.Members.Dialog.height
                        ),
                        Settings.Process.Members.Dialog.bracketColor,
                        Settings.Process.Members.Dialog.bracketWidth
                    ),
                    Settings.Process.Members.Dialog.bgColor,
                    Settings.BgColor.transparent,
                    0
                )
            );
        }

        private createTitle() {
            this.add( this.title = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Title.width,
                Settings.Process.Members.Dialog.Title.height,
                Settings.Process.Members.Dialog.Title.color,
                Settings.Process.Members.Dialog.Title.bgColor
            ) );
            this.title.position = Settings.Process.Members.Dialog.Title.position.clone();
        }

        private createMemberCard() {
            this.memberCard = new MemberCard(
                this.director,
                this.memberId,
                Settings.Process.Members.Dialog.Card.position.x,
                Settings.Process.Members.Dialog.Card.position.y,
                Settings.Process.Members.Dialog.Card.width,
                Settings.Process.Members.Dialog.Card.height,
                Command.nothing,
                false
            );
            this.updateAnswerCardCommand();
            this.add( this.memberCard );
        }

        private getMemberModel() {
            return this.director.getProcessModel().Members[ this.memberId ];
        }

        private updateAnswerCardCommand() {
            this.memberCard.getAnswerCard().setCommand( new MemberDialogCommand( this.memberCard.getAnswerCard().getMemberId() ) );
        }
    }
}