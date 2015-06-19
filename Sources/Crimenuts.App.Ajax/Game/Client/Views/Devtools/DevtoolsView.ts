module Crimenuts {
    export class DevtoolsView extends Phaser.Group implements IDevtoolsView {
        
        // IDevtoolsView
        getDisplayObject(): PIXI.DisplayObject {
             return this;
        }

        // Ctor
        constructor(
            controller: IDevtoolsController
        ) {
            super( app.game );

            this.ignoreDestroy = true;
            this.controller = controller;
            this.createWindow();
            this.createTextArea();
            this.createButtons();

        }

        // Fields
        private controller: IDevtoolsController;
        private buttonTop = 15;
        private textArea: ITextArea;

        // Create
        private createWindow() {
            var w = 700;
            var h = 800;

            var window = new RectangleDecor( new ButtonEssence( Command.nothing, w, h ) );

            this.alpha = 0.95;
            this.x = app.game.width - w - 2;
            this.y = 32;

            this.add( window );
        }

        private createTextArea() {
            var w = 600;
            var h = this.height - 20;
            var x = 10;
            var y = 15;
            var ff = "Courier";
            var fc = "#DDDDDD";
            var fs = 20;
            var bg = Settings.Color.transparent;

            this.textArea = new TextLabel( w, h, ff, fs, fc,  bg);
            var textArea = this.textArea.getDisplayObject();
            textArea.x = x;
            textArea.y = y;

            this.textArea.setText( "12345 asd" );
            this.textArea.alignTop();

            this.add( textArea );
        }

        private createButtons() {
            this.createButton( new ProcessesResetCommand() );
            this.createButton( new ShowUserActionsCommand( this.textArea) );
        }

        private createButton( command: ICommand ) {
            var d = 10;
            var left = this.width-Settings.UserInterface.Button.sizes.width - 15;
            
            var button = app.uiFactory.makeDefaultButton( command ).getDisplayObject();
            button.x = left;
            button.y = this.buttonTop;
            this.buttonTop += button.getLocalBounds().height + d;
            this.add( button );
        }
    }
}