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
            this.alpha = 0.95;
            this.ignoreDestroy = true;
            this.controller = controller;
            this.createWindow();
            this.createText();
            this.createButtons();
        }

        // Fields
        private controller: IDevtoolsController;

        // Create
        private createWindow() {
            var w = 500;
            var h = 700;
            var y = 32;
            var x = app.game.width - w - 2;

            var window = new RectangleDecor( new ButtonEssence( Command.nothing, w, h ) );
            window.x = x;
            window.y = y;

            this.add( window );

        }

        private createText() {}

        private createButtons() {}
    }
}