module Crimenuts.Assets {

    export class Sprites {
        static path = "/Game/Client/Assets/Sprites";

        static preloadPerson( world: string, person: string, size: number  ): string {
            var key = Sprites.getPersonKey( world, person, size );
            if( !app.game.cache.checkImageKey( key ) ) {
                this.loadPerson( world, person, size );
            }
            return key;
        }

        static getPersonKey( world: string, person: string, size: number ): string {
            return `sprite-person-${world}-${person}-${size}`;
        }

        static loadPerson( world: string, person: string, size: number  ) {
            var key = Sprites.getPersonKey( world, person, size );
            var path = `/Image/Person?world=${world}&name=${person}&width=${size}&height=${size}`;
            app.game.load.image( key, path);
        }
    }
}