/// <reference path="../UserInterface/Types/ColorPack.ts" />
/// <reference path="../UserInterface/Types/SizePack.ts" />
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

    export module Color {
        export var black = 0x000000;
        export var white = 0xFFFFFF;
        export var transparent = 0xFF0123;
    }

    export module UserInterface {
        export module Button {
            export var sprite = Assets.Sprites.transparent;
            export var leftAlign = 580 * k;
            export var sizes = {
                width: 120 * k,
                height: 40 * k,
                font: 16 * k,
                stroke: 1.5
            }

            export module White {

                export module Regular {
                    export var colors = new ColorPack( 0xAAAAAA, 0xAAAAAA, "#000000" );
                }

                export module Highlight {
                    export var colors = new ColorPack( 0xFFFFFF, 0xFFFFFF, "#000000" );
                }
            }

            export module Menu {
                export var sizes = {
                    width: 50 * k,
                    height: 30 * k,
                    font: 16 * k,
                    stroke: 0
                }
                export module Regular {
                    export var colors = new ColorPack( Color.transparent, Color.transparent, "#008800" );
                }

                export module Highlight {
                    export var colors = new ColorPack( Color.transparent, Color.transparent, "#00FF00" );
                }
            }
        }

        export module TextLabel {
            export var fontSizeToHeightRate = 16 / 25;
        }

        export module Bracket {
            export var width = Game.width - 10;
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
                    export var bgColor = Color.transparent;
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
                    export var bgColor = Color.transparent;
                }

                export module Text {
                    export var position = new Phaser.Point( 252 * k, 85 * k );
                    export var width = 250 * k;
                    export var height = 22 * k;
                    export var color = "#AAAAAA";
                    export var bgColor = Color.transparent;
                }

                export module Buttons {
                    export var left = UserInterface.Button.leftAlign;
                    export var markPosition = new Phaser.Point( left, 120 * k );
                    export var arrestPosition = new Phaser.Point( left, 170 * k );
                }
            }
        }

        export module Board {
            export var position = new Phaser.Point( 5 * k, 39 * k );
            export var width = Game.width - position.x * 2;
            export var height = 250 * k;

            export module Buttons {
                export module Auto {
                    export var position = new Phaser.Point( UserInterface.Button.leftAlign, 220 * k );
                }
                export module Continue {
                    export var position = new Phaser.Point( UserInterface.Button.leftAlign, 170 * k );
                }
            }

            export module Answers {
                export var position = new Phaser.Point( 0 * k, 47 * k );
                export var width = 600;
                export var height = 210 * k;
                export var bgColor = Color.transparent;

                export module Answer {
                    export var fontSize = 14 * k;
                    export var left = 10 * k;
                    export var top = 0 * k;

                    export module Colors {
                        export var regular = "#777777";
                    }
                }
            }
        }

        export module Bars {
            export var textColor = "#AAAAAA";
            export var bgColor = Color.transparent;
            export var left = 5 * k;
            export var width = Game.width - left * 2;
            export var height = 30 * k;

            export module InfoBar {
                export var position = new Phaser.Point( Bars.left, 5 * k );
            }
        }
    }
}