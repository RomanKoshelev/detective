﻿module Crimenuts {
    export class ProcessState extends Phaser.State {

        static background = "#000000";
        processView: ProcessView;
        server: ServerAdapter;

        constructor() {
            super();
            this.server = app.server;
        }

        init() {
            this.game.stage.backgroundColor = ProcessState.background;
        }

        preload() {
            //Assets.Sprites.loadPerson( "Simpsons", "Snake", 200 );
        }

        create() {
            this.processView = new ProcessView( this.game, this.server );
        }
    }
}