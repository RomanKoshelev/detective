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
            export var testId = "11";
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
    }

    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var position = new Phaser.Point( 10*k, 75*k );
            export var numInRow = 6;

            export module Member {
                export var width = 100*k;
                export var height = width*1.2;

                export module Name {
                    export var height = 16*k;
                    export var fontSize = 11*k;
                    export var color = "#AAAAAA";
                    export var bgColor = 0x222222;
                }
            }
        }

        export module Bars {
            export var textColor = "#000000";
            export var bgColor = 0x444444;
            export var fontSize = 16*k;
            export var left = 5*k;
            export var width = Game.width-left*2;
            export var height = 25*k;

            export module InfoBar {
                export var position = new Phaser.Point( Bars.left, 37*k );
            }

            export module StateBar {
                export var position = new Phaser.Point( Bars.left, Members.position.y + (Members.Member.height + Members.Member.Name.height)*2 );
            }
        }

        export module Answers {
            export var position = new Phaser.Point( 5*k, Bars.StateBar.position.y + Bars.height );
            export var width = Game.width - position.x*2;
            export var height = 170*k;
            export var bgColor = 0x111111;

            export module Buttons {
                export module Auto {
                    export var position = new Phaser.Point( 590*k, 20*k );
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