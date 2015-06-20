module Crimenuts {
    export class ButtonsHolder extends Phaser.Group {

        update() {
            this.buttons.forEach( b => {
                var c = b.getCommand();
                c.updateAvailability();
                b.getDisplayObject().visible = c.isAvailable;
            } );
        }

        protected bottom: number;
        protected buttons = new Array<IButton>();

        protected createButtonAtBottom( command: ICommand, method: Function, num: number ) {
            var button: IButton = method( command );
            var dy = Settings.UserInterface.Button.sizes.height + Settings.UserInterface.Button.verSpan;
            button.getDisplayObject().y = this.bottom - num * dy - Settings.UserInterface.Button.sizes.height;
            this.buttons.push(button);
            this.add( button );
        }
    }
}