module Crimenuts.Settings {

    export module Default {
        export module Font {
            export var face = "Arial";
        }
    }
    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var position = new Phaser.Point( 25, 90 );
            export var numInRow = 6;

            export module Card {
                export var width = 95;
                export var height = 120;

                export module Name {
                    export var height = 16;
                    export var fontSize = 10;
                    export var color = "#CCCCCC";
                    export var bgColor = 0x222222;
                }
            }
        }

        export module StateBar {
            export var position = new Phaser.Point( 25, 20 );
            export var width = 700;
            export var height = 20;

            export var fontSize = 10;
            export var color = "#CCCCCC";
            export var bgColor = 0x222222;
        }

    }
}