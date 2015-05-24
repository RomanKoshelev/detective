module Crimenuts.Assets {

    export class Sprites {
        static path = "/Game/Client/Assets/Sprites";

        static preloadPerson( world: string, person: string ): string {
            var key = Sprites.getPersonKey( world, person );
            if( !app.game.cache.checkImageKey( key ) ) {
                this.loadPerson( world, person );
            }
            return key;
        }


        static getPersonKey( world: string, person: string ): string {
            return `sprite-person-${world}-${person}`;
        }

        static loadPerson( world: string, person: string ) {
            var key = Sprites.getPersonKey( world, person );
            var path = `${Sprites.path}/Worlds/${world}/Persons/${person}/person.picture.png`;
            app.game.load.image( key, path);
        }
    }
}