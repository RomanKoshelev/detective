module Crimenuts {
    export interface IProcessController {
        getProcess( processId: string ) : JQueryPromise<ProcessModel>;
        autoAnswer( processId: string ) : JQueryPromise<void> ;
    }
}