module Crimenuts.Settings {

    export module Default {
        export module Font {
            export var face = "Arial";
            export var size = 16;
            export var color = "#AAAAAA";
            export var bgColor = 0x000000;
        }

        export module RoundedRectangle {
            export var radiusRate = 1 / 5;
        }

        export module Shape {
            export var lineWidth = 2;
            export var fillColor = 0x222222;
            export var lineColor = 0xAAAAAA;
        }

        export module Process {
            export var testId = "11";
        }
    }

    export module Game {
        export var width = 720;
        export var height = 820;
    }

    export module Assets {
        export module Sprites {
            export var transparent = "transparent";
        }
    }

    export module BgColor {
        export var black = 0x000000;
        export var white = 0xFFFFFF;
        export var transparent = -1;
    }

    export module UserInterface {
        export module Button {
            export var width = 100;
            export var height = 35;
            export var sprite = Assets.Sprites.transparent;
            export var fontSize = 16;
            export var fillColor = 0x222222;
            export var lineColor = 0x888888;
            export var textColor = "#AAAAAA";
            export var lineWidth = 1.5;

            export module Default {
                export var lineWidth = Button.lineWidth;

                export module Regular {
                    export var fillColor = 0xAAAAAA;
                    export var lineColor = fillColor;
                    export var textColor = "#000000";
                }

                export module Hover {
                    export var fillColor = 0xFFFFFF;
                    export var lineColor = lineColor;
                    export var textColor = "#000000";
                }
            }
        }
    }

    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var position = new Phaser.Point( 25, 90 );
            export var numInRow = 6;

            export module Member {
                export var width = 95;
                export var height = 120;

                export module Name {
                    export var height = 16;
                    export var fontSize = 10;
                    export var color = "#AAAAAA";
                    export var bgColor = 0x222222;
                }
            }
        }


        export module Answers {
            export var position = new Phaser.Point( 10, 405 );
            export var width = 700;
            export var height = 200;
            export var bgColor = 0x111111;

            export module Buttons {
                export module Auto {
                    export var position = new Phaser.Point( 580, 20 );
                }
            }

            export module Answer {
                export var fontSize = 16;

                export module Color {
                    export var regular = "#777777";
                }
            }
        }


        export module Bars {
            export var textColor = "#000000";
            export var bgColor = 0x777777;

            export module InfoBar {
                export var position = new Phaser.Point( 10, 50 );
                export var width = 700;
                export var height = 25;

                export var fontSize = 16;
                export var textColor = Bars.textColor;
                export var bgColor = Bars.bgColor;
            }

            export module StateBar {
                export var position = new Phaser.Point( 10, 375 );
                export var width = 700;
                export var height = 25;

                export var fontSize = 16;
                export var textColor = Bars.textColor;
                export var bgColor = Bars.bgColor;
            }
        }
    }
}