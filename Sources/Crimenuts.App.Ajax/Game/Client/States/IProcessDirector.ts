module Crimenuts {
    export interface IProcessDirector{
        getProcessModel() : ProcessModel;
        getController() : IProcessController;
        getObserver(): IProcessObserver;
        getView(): IStateView;
    }
}