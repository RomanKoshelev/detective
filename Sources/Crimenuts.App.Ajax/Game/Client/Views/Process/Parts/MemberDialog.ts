module Crimenuts.View.Process {
    export class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {

        static instance: IMemberDialog;

        constructor(
            director: IProcessDirector,
            cmdMark: Command,
            cmdArrest: Command
        ) {
            super( app.game );
            this.position = Settings.Process.Members.Dialog.position.clone();
            this.director = director;

            this.createFrameDecoration();
            this.createMemberCard();
            this.createTitle();
            this.createText();
            this.createButtons( cmdMark, cmdArrest );

            MemberDialog.instance = this;
        }

        setMember( memberId: number ) {
            this.memberId = memberId;
            this.updateMemberCard();
            this.updateTitle();
            this.updateText();
            this.updateAnswerCardCommand();
        }

        onProcessUpdated( director: IProcessDirector ): void {
            this.setMember( this.memberId );
        }

        // Fields
        private director: IProcessDirector;

        private memberId = 0;
        private title: ITextLabel;
        private text: ITextLabel;
        private memberCard: MemberCard;
        private arrestButton: IButton;
        private markButton: IButton;

        private createFrameDecoration() {
            this.add(
                new RectangleDecor(
                    new BracketDecor(
                        new Decorable(
                            Settings.UserInterface.Bracket.width,
                            Settings.Process.Members.Dialog.height
                        ),
                        Settings.UserInterface.Bracket.lineColor,
                        Settings.UserInterface.Bracket.lineWidth
                    ),
                    Settings.UserInterface.Bracket.bgColor,
                    Settings.Color.transparent,
                    0
                )
            );
        }

        private createTitle() {
            this.title = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Title.width,
                Settings.Process.Members.Dialog.Title.height,
                Settings.Process.Members.Dialog.Title.color,
                Settings.Process.Members.Dialog.Title.bgColor
            );
            this.title.getDisplayObject().position = Settings.Process.Members.Dialog.Title.position.clone();
            this.add( this.title );
        }

        private createText() {
            this.text = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Text.width,
                Settings.Process.Members.Dialog.Text.height,
                Settings.Process.Members.Dialog.Text.color,
                Settings.Process.Members.Dialog.Text.bgColor
            );
            this.text.getDisplayObject().position = Settings.Process.Members.Dialog.Text.position.clone();
            this.text.alignTop();
            this.add( this.text );
        }

        private createButtons( cmdMark: Command, cmdArrest: Command ) {
            this.markButton = app.uiFactory.makeDefaultButton(
                cmdMark,
                Settings.Process.Members.Dialog.Buttons.markPosition
            );
            this.arrestButton = app.uiFactory.makeDefaultButton(
                cmdArrest,
                Settings.Process.Members.Dialog.Buttons.arrestPosition
            );
            this.add( this.markButton );
            this.add( this.arrestButton );
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


        // Update
        private updateAnswerCardCommand() {
            this.memberCard.getAnswerCard().setCommand(
                new MemberSelectCommand(
                    this.director.getController(),
                    this.memberCard.getAnswerCard().getMemberId()
                ) );
        }

        private updateTitle() {
            var member = this.getMemberModel();
            this.title.setText( `${member.Name}:\n"${member.TodayAnswer.AnswerDiaogText}"` );
        }

        private updateText() {
            var member = this.getMemberModel();
            var answer = member.TodayAnswer;
            this.text.setText( answer.IsValid
                ? `${member.Name} ${answer.SubjectRelation}s ${answer.SubjectName}`
                : ""
            );
        }

        private updateMemberCard() {
            this.memberCard.setMember( this.memberId );
        }

        // Model
        private getMemberModel() {
            return this.director.getProcessModel().Members[ this.memberId ];
        }

    }
}