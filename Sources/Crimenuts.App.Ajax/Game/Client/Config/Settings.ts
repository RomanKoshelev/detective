module Crimenuts.Settings {

    export module Default {
        export module Font {
            export var face = "Arial";
        }
    }
    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var position = new Phaser.Point( 10, 50 );
            export var numInRow = 6;

            export module Card {
                export var width = 100;
                export var height = 150;

                export module Name {
                    export var height = 22;
                    export var fontSize = 16;
                    export var color = "#FFFFFF";
                    export var bgColor = 0x222222;
                }
            }
        }
    }
}