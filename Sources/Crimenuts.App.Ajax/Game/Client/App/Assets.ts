module Crimenuts.Assets {

    export enum Type {
        Person,
        World
    }

    export class Sprites {
        static path = "/Game/Client/Assets/Sprites";

        static getKey( assetType: Type ): string {
            return `${assetType}`;
        }

        static load( assetType: Assets.Type ) {
            var typeName = Type[ assetType ].toLowerCase();
            app.game.load.image(
                Sprites.getKey( assetType ),
                `${Sprites.path}/${typeName}.png` );
        }
    }
}