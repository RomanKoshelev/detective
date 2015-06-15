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
            this.createPersonPicture();
            this.createTitle();

            this.setMember( 0 );

            MemberDialog.instance = this;
        }

        setMember( memberId: number ) {
            this.memberId = memberId;
            var member = this.getActualMemberModel( memberId );
            var name = member.Name;
            var answer = member.TodayAnswer;
            this.memberPicture.setPerson( member.World, name );
            this.title.setText( `${name}:\n"${answer}"` );
        }

        onUpdateProcess( process: ProcessModel ): void {
            this.setMember( this.memberId );
        }

        private director: IProcessDirector;
        private controller: IProcessController;

        private memberId = Settings.Process.Members.unknownMember;
        private title: TextLabel;
        private memberPicture: PersonPicture;

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

        private createPersonPicture() {
            this.add( this.memberPicture = new PersonPicture( 0, 40, 160 ) );
        }

        private getActualMemberModel( memberId: number ) {
            return this.director.getActualModel().Members[ memberId ];
        }
    }
}