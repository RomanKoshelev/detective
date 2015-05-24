 module Crimenuts {
    export class ProcessView {

        constructor( game: Phaser.Game, server : ServerAdapter ) {
            this.game = game;
            this.server = server;
            this.ui = new UserInterfaceView( this.game );
            this.items = new Phaser.Group(game);

            server.getProcess().done( ( model: ProcessModel ) => {
                this.model= model;
                this.updateUi();
                this.createMembers();
                this.subscribeEvents();
            } );
        }

        // References
        private game: Phaser.Game;
        private server: ServerAdapter;
        // Parts
        private ui: UserInterfaceView;
        private items: Phaser.Group;
        // Data
        private model: ProcessModel;
        private tickCount: Number;

        private onSessionUpdated( model: ProcessModel ) {
            this.model = model;
        }

        private onTickCountUpdated( count: Number ) {
            this.tickCount = count;
            this.updateUi();
        }

        private updateUi() {
            var members = this.getMemersNamesList();
            this.ui.setCaseId( this.model.CaseId );
            this.ui.setBottomText( `${this.model.Id} ${members} [${app.tickCount}]` );
        }

        private getMemersNamesList() {
            var names = "";
            this.model.Company.Members.forEach( m => {
                names += m + " ";
            } );
            return names;
        }

        private subscribeEvents() {
            this.server.onProcessUpdated.add( this.onSessionUpdated, this );
            this.server.onTickCountUpdated.add( this.onTickCountUpdated, this );
            
        }

        private createMembers() {
            var world = "Simpsons";
            var size  = 120;
            var loader = new Phaser.Loader( this.game );

            this.model.Company.Members.forEach( name => {
                loader.image(
                    Assets.Sprites.getPersonKey( world, name, size ),
                    Assets.Sprites.getPersonUrl( world, name, size ) );
            });

            loader.onLoadComplete.addOnce( this.createMembersWhenImagesLoaded, this );
            loader.start();
        }

        private createMembersWhenImagesLoaded() {
            var world = "Simpsons";
            var size = 120;
            var i = 0;
            var n = 6;
            var x = 0;
            var y = 50;
            this.model.Company.Members.forEach( name => {
                if( i === 6 ) {
                    x = 0;
                    y += size*1.5;
                }
                i++;
                this.items.add( new PersonPicture( this.game, world, name, x, y, size ) );
                x += size;
            });            
        }
    }
}