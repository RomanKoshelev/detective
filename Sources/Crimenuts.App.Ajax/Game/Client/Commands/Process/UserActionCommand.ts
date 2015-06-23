/// <reference path="../Command.ts" />
module Crimenuts {
    export class UserActionCommand extends Command {

        // Ctor
        constructor(
            name: string,
            director: IProcessDirector,
            processId: string,
            action: UserActionCode,
            args: number[]=new Array<number>( 0 )
        ) {
            super( name );
            this.callback = this.doExecute;
            this.context = this;

            this.director = director;
            this.processId = processId;
            this.action = action;
            this.args = args;
        }

        // Protected
        protected director: IProcessDirector;
        protected processId: string;
        protected action: UserActionCode;
        protected args: number[];

        protected getController(): IProcessController {
            return this.director.getController();
        }

        // Virtual
        protected doExecute() {}

        // Overrides 
        protected doUpdateAvailability(): boolean {
            var process = app.processDirector.getProcessModel();
            if( process.Id !== this.processId ) {
                return false;
            }

            var res = false;
            process.Actions.forEach( a => {
                if( this.action === UserActionCode[ a.Type ] && this.checkArgs( a.Args ) ) {
                    res = true;
                }
            } );

            return res;
        }

        // Utils
        private checkArgs( args: number[] ): boolean {
            if( args.length !== this.args.length ) {
                return false;
            }
            for( var i in this.args ) {
                if( this.args[ i ] !== args[ i ] ) {
                    return false;
                }
            }
            return true;
        }
    }
}