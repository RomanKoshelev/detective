module Crimenuts.View.Process {

    export class MemberDialog extends Phaser.Group implements IDecorable{

        static position = Settings.Process.Members.Dialog.position;
        static width = Settings.Process.Members.Dialog.width;
        static height = Settings.Process.Members.Dialog.height;
        static bgColor = Settings.Process.Members.Dialog.bgColor;

        constructor() {
            super( app.game );
            this.position.set( MemberDialog.position.x, MemberDialog.position.y );
            this.createFrameDecoration( MemberDialog.width, MemberDialog.height );
        }

        getSize(): Size {
            return new Size( MemberDialog.width, MemberDialog.height );
        }

        getDysplayObject(): PIXI.DisplayObject {
            return this;
        }

        private createFrameDecoration( width: number, height: number ) {
            var area = new Decorable(width, height);
            var frameDecor = new RectangleDecor( area, MemberDialog.bgColor );
            this.add( frameDecor );
        }
    }
}