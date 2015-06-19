module Crimenuts {
    export class ColorPack {
        constructor( fill: number, border: number, text: string ) {
            this.fill = fill;
            this.border = border;
            this.text = text;
        }

        fill: number;
        border: number;
        text: string;
    }
}