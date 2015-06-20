module Crimenuts {
    export class ButtonsHolder extends Phaser.Group {

        protected bottom: number;

        protected createButtonAtBottom( command: ICommand, method: Function, num: number ) {
            var button: IButton = method( command );
            var dy = Settings.UserInterface.Button.sizes.height + Settings.UserInterface.Button.verSpan;
            button.getDisplayObject().y = this.bottom - num * dy - Settings.UserInterface.Button.sizes.height;
            this.add( button );
        }
    }
}