module Crimenuts.Assets {

    export class Sprites {
        static path = "/Game/Client/Assets/Sprites";

        static getPersonKey( world: string, person: string, size: number ): string {
            size = Math.ceil( size );
            return `sprite-person-${world}-${person}-${size}`;
        }

        static getPersonUrl( world: string, person: string, size: number ): string {
            size = Math.ceil( size );
            return `/Image/Person?world=${world}&name=${person}&width=${size}&height=${size}`;
        }

        static loadPerson( world: string, person: string, size: number  ) {
            app.game.load.image(
                Sprites.getPersonKey( world, person, size ),
                Sprites.getPersonUrl( world, person, size )
                );
        }

        static load( key:string ) {
            app.game.load.image( key, Sprites.getUrl( key ) );
        }

        static getUrl( key: string ): string {
            return `${Sprites.path}/${key}.png`;
        }
    }
}