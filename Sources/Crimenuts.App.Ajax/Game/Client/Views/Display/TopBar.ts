/// <reference path="../../Commands/Devtools/ShowDevtoolsCommand.ts" />
module Crimenuts {
    export class TopBar extends Phaser.Graphics {

        text: Phaser.Text;

        constructor() {
            super( app.game, 0, 0 );
            this.createBar();
            this.createMenu();
        }

        private createBar() {
            var h1 = 30;
            var h2 = 3;
            var c1 = 0x005500;
            var c2 = 0x770000;

            var wg = app.game.width;

            this.beginFill( c1 );
            this.drawRect( 0, 0, wg, h1 );
            this.endFill();
            this.beginFill( c2 );
            this.drawRect( 0, h1, wg, h2 );
            this.endFill();

            this.addChild( this.text = new Phaser.Text(
                app.game,
                7, 7,
                "",
                {
                    font: "18px Arial",
                    fill: "#44dd44",
                    align: "left"
                }
            ) );
        }

        private createMenu() {
            var devButton = app.uiFactory.makeTopMenuButton( new ShowDevtoolsCommand() ).getDisplayObject();
            this.addChild( devButton );
            devButton.x = this.width - devButton.getLocalBounds().width;
        }
    }
}