module Crimenuts.View.Process {
    export class MemberDialog extends Phaser.Group implements IProcessViewPart, IMemberDialog {

        constructor( model: ProcessModel ) {
            super( app.game );
            this.position = Settings.Process.Members.Dialog.position.clone();
            this.model = model;
            this.createFrameDecoration();
            this.createName();
            this.setMember( 0 );
        }

        setMember( memberId: number ) {
            this.nameLabel.setText(
                this.model.Members[ memberId ] );
        }


        updateModel( model: ProcessModel ): void {

        }

        private nameLabel: TextLabel;
        private model: ProcessModel;

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
            this.add( this.nameLabel = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Name.width,
                Settings.Process.Members.Dialog.Name.height,
                Settings.Process.Members.Dialog.Name.color,
                Settings.Process.Members.Dialog.Name.bgColor
            ) );
        }
    }
}