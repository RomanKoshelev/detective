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
            this.createText();
            this.createButtons();
        }

        // Fields
        private controller: IDevtoolsController;

        // Create
        private createWindow() {
            var window = new Decorable( 500, 700 );
            var decor = new RoundedRectangleDecor( window );
            this.add( decor );
        }

        private createText() {}

        private createButtons() {}
    }
}