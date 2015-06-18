/// <reference path="../UserInterface/Types/ColorSet.ts" />
/// <reference path="../Types/AnswerCode.ts" />
/// <reference path="../Types/RelationCode.ts" />

module Crimenuts.Settings {

    export module Game {
        export var width = 768;
        export var height = 910;
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
            export var testId = "30";
        }

        export module Assets {
            export var personSize = 100;
            export var pictureSize = 100;
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
            export var width = 120 * k;
            export var height = width * 0.30;
            export var sprite = Assets.Sprites.transparent;
            export var fontSize = 16 * k;
            export var fillColor = 0x222222;
            export var lineColor = 0x888888;
            export var textColor = "#AAAAAA";
            export var lineWidth = width * 0.015;
            export var left = 580 * k;

            export module White {
                export module Regular {
                    export var colors = new ColorSet( 0xAAAAAA, 0xAAAAAA, "#000000" );
                }

                export module Highlight {
                    export var colors = new ColorSet( 0xFFFFFF, 0xFFFFFF, "#000000" );
                }
            }
        }

        export module TextLabel {
            export var fontSizeToHeightRate = 16 / 25;
        }

        export module Bracket {
            export var width = Game.width - 5 * 2;
            export var bgColor = 0x000000;
            export var lineColor = 0x888888;
            export var lineWidth = 2;
        }
    }

    export module Process {
        export var bgColor = "#000000";

        export module Members {
            export var left = 10 * k;
            export var top = 575 * k;
            export var position = new Phaser.Point( left, top );
            export var numInRow = 6;
            export var unknownMember = -1;
            export var spanHorRate = 1.3;
            export var spanVerRate = 1.1;

            export module Card {
                export var width = 90 * k;
                export var height = 115 * k;
                export var inaciveShade = 0.8;

                export module Spot {
                    export var heightRate = 0.10;
                    export var footShiftRate = 0.70;

                    export var color: { [ key: string ]: number } = {};
                    color[ AnswerCode[ AnswerCode.Error ] ] = 0xFFFFFF;
                    color[ AnswerCode[ AnswerCode.Unknown ] ] = 0x666666;
                    color[ AnswerCode[ AnswerCode.Innocent ] ] = 0x00FF00;
                    color[ AnswerCode[ AnswerCode.Murderer ] ] = 0xFF0000;
                    color[ AnswerCode[ AnswerCode.NotSuspicious ] ] = 0x006600;
                    color[ AnswerCode[ AnswerCode.Suspicious ] ] = 0x660000;
                }

                export module Name {
                    export var height = 22 * k;
                    export var fontSize = 11 * k;
                    export var color = "#666666";
                    export var bgColor = BgColor.transparent;
                }

                export module Answer {
                    export var sizeRate = 0.5;
                    export var xRate = 0.6;
                    export var yRate = 0.0;
                    export var tintColor = 0xDDDDDD;
                }

                export module Sign {
                    export var picture: { [ key: string ]: string } = {};
                    picture[ RelationCode[ RelationCode.Love ] ] = "heart";
                    picture[ RelationCode[ RelationCode.Hate ] ] = "light";
                    picture[ RelationCode[ RelationCode.Ignore ] ] = "transparent";
                    export var sizeRate = 0.5;
                    export var xRate = 0.15;
                    export var yRate = 0.15;
                }
            }

            export module Dialog {
                export var left = 5 * k;
                export var top = 330 * k;
                export var position = new Phaser.Point( left, top );
                export var height = 220 * k;

                export module Card {
                    export var position = new Phaser.Point( 8 * k, 30 * k );
                    export var width = 210 * k;
                    export var height = width;
                }

                export module Title {
                    export var position = new Phaser.Point( 250 * k, 25 * k );
                    export var width = 250 * k;
                    export var height = 36 * k;
                    export var color = "#AAAAAA";
                    export var bgColor = BgColor.transparent;
                }

                export module Text {
                    export var position = new Phaser.Point( 252 * k, 85 * k );
                    export var width = 250 * k;
                    export var height = 22 * k;
                    export var color = "#AAAAAA";
                    export var bgColor = BgColor.transparent;
                }
                export module Buttons {
                    export var left = UserInterface.Button.left;
                    export var markPosition = new Phaser.Point( left, 120 * k );
                    export var arrestPosition = new Phaser.Point( left, 170 * k );
                }
            }
        }

        export module Answers {
            export var position = new Phaser.Point( 5 * k, 39 * k );
            export var width = Game.width - position.x * 2;
            export var height = 250 * k;
            export var bgColor = BgColor.transparent;

            export module Buttons {
                export module Auto {
                    export var position = new Phaser.Point( UserInterface.Button.left, 220 * k );
                }
            }

            export module Answer {
                export var fontSize = 14 * k;
                export var left = 10 * k;
                export var top = 23 * k;

                export module Color {
                    export var regular = "#777777";
                }
            }
        }

        export module Bars {
            export var textColor = "#AAAAAA";
            export var bgColor = BgColor.transparent;
            export var left = 5 * k;
            export var width = Game.width - left * 2;
            export var height = 30 * k;

            export module InfoBar {
                export var position = new Phaser.Point( Bars.left, 5 * k );
            }
        }
    }
}