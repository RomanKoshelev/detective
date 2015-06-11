module Crimenuts.View.Process {
    export class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {

        constructor( model: ProcessModel ) {
            super( app.game );
            this.position = Settings.Process.Members.Dialog.position.clone();
            this.model = model;
            this.createFrameDecoration();
            this.createName();
            this.createPersonPicture();
            this.setMember( 0 );
        }

        setMember( memberId: number ) {
            this.memberName.setText( this.model.Members[ memberId ] );
            this.memberPicture.setPerson( this.model.World, this.model.Members[ memberId ] );
        }

        updateModel( model: ProcessModel ): void {

        }

        private model: ProcessModel;
        private memberName: TextLabel;
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

        private createName() {
            this.add( this.memberName = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Name.width,
                Settings.Process.Members.Dialog.Name.height,
                Settings.Process.Members.Dialog.Name.color,
                Settings.Process.Members.Dialog.Name.bgColor
            ) );
        }

        private createPersonPicture() {
            this.add( this.memberPicture = new PersonPicture( 0, 40, 160 ) );
        }
    }
}