module Crimenuts.View.Process {
    export interface IProcessViewPart {
        onProcessUpdated( director: IProcessDirector ): void;
    }
}