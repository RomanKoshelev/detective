/// <reference path="../UserInterface/Types/ColorSet.ts" />
module Crimenuts.Settings {

    export module Game {
        export var width = 768;
        export var height = 1024;
    }

    var k = Game.width / 720.0;

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
            export var testId = "21";
        }
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
            export var width = 100*k;
            export var height = width*0.35;
            export var sprite = Assets.Sprites.transparent;
            export var fontSize = 16*k;
            export var fillColor = 0x222222;
            export var lineColor = 0x888888;
            export var textColor = "#AAAAAA";
            export var lineWidth = width*0.015;

            export module White {
                export module Regular {
                    export var colors = new ColorSet(0xAAAAAA, 0xAAAAAA, "#000000");
                }
                export module Highlight {
                    export var colors = new ColorSet(0xFFFFFF, 0xFFFFFF, "#000000");
                }
            }
        }

        export module TextLabel {
            export var fontSizeToHeightRate = 16/25;
        }
    }

    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var left = 10*k;
            export var top = 640*k;
            export var position = new Phaser.Point( left, top );
            export var numInRow = 6;
            export var unknownMember = -1;

            export module Card {
                export var width = 100*k;
                export var height = width*1.2;

                export module Name {
                    export var height = 16*k;
                    export var fontSize = 11*k;
                    export var color = "#666666";
                    export var bgColor = 0x000000;
                }
            }

            export module Dialog {
                export var left = 5*k;
                export var top = 400*k;
                export var position = new Phaser.Point( left, top );
                export var width = Game.width-left*2;
                export var height = 200*k;
                export var bgColor = 0x000000;
                export var bracketColor = 0x888888;
                export var bracketWidth = 2;

                export module Title {
                    export var position = new Phaser.Point( 250*k, 25*k );
                    export var width = 250*k;
                    export var height =36*k;
                    export var color = "#AAAAAA";
                    export var bgColor = BgColor.transparent;
                }

            }
        }

        export module Bars {
            export var textColor = "#000000";
            export var bgColor = 0x444444;
            export var left = 5*k;
            export var width = Game.width-left*2;
            export var height = 25*k;

            export module InfoBar {
                export var position = new Phaser.Point( Bars.left, 37*k );
            }
        }

        export module Answers {
            export var position = new Phaser.Point( 15*k, 100*k );
            export var width = Game.width - position.x*2;
            export var height = 200*k;
            export var bgColor = 0x000000;

            export module Buttons {
                export module Auto {
                    export var position = new Phaser.Point( 590*k, 10*k );
                }
            }

            export module Answer {
            export var fontSize = 16*k;

                export module Color {
                    export var regular = "#777777";
                }
            }
        }
    }
}