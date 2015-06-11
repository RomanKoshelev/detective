module Crimenuts.View.Process {

    export class MemberDialog extends Phaser.Group implements IProcessViewPart {

        constructor() {
            super( app.game );
            this.position = Settings.Process.Members.Dialog.position.clone();
            this.createFrameDecoration(
                Settings.Process.Members.Dialog.width,
                Settings.Process.Members.Dialog.height
            );
        }

        private createFrameDecoration( width: number, height: number ) {
            this.add(
                new RectangleDecor(
                    new BracketDecor(
                        new Decorable( width, height ),
                        Settings.Process.Members.Dialog.bracketColor,
                        Settings.Process.Members.Dialog.bracketWidth
                    ),
                    Settings.Process.Members.Dialog.bgColor,
                    Settings.BgColor.transparent,
                    0
                )
            );
            this.add( this.nameLabel = app.uiFactory.makeTextLabel(
                Settings.Process.Members.Dialog.Name.width,
                Settings.Process.Members.Dialog.Name.height,
                Settings.Process.Members.Dialog.Name.color,
                Settings.Process.Members.Dialog.Name.bgColor
            ) );

            this.nameLabel.setText( "Name" );
        }

        updateModel( model: ProcessModel ): void {

        }

        private nameLabel: TextLabel;
    }
}