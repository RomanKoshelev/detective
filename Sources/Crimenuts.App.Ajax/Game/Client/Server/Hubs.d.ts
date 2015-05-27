





// Get signalr.d.ts.ts from https://github.com/borisyankov/DefinitelyTyped (or delete the reference)
 
////////////////////
// available hubs //
////////////////////
//#region available hubs
 
interface SignalR {
 
    /**
      * The hub implemented by Crimenuts.App.Ajax.Game.Server.Hub.GameHub
      */
    gameHub : GameHub;
}
//#endregion available hubs
 
///////////////////////
// Service Contracts //
///////////////////////
//#region service contracts
 
//#region GameHub hub
 
interface GameHub {
    
    /**
      * This property lets you send messages to the GameHub hub.
      */
    server : GameHubServer;
 
    /**
      * The functions on this property should be replaced if you want to receive messages from the GameHub hub.
      */
    client : GameHubClient;
}
 
interface GameHubServer {
 
    /** 
      * Sends a "getPlayerId" message to the GameHub hub.
      * Contract Documentation: ---
      * @return {JQueryPromise of string}
      */
    getPlayerId() : JQueryPromise<string>;
 
    /** 
      * Sends a "getProcess" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @return {JQueryPromise of ProcessModel}
      */
    getProcess(processId : string) : JQueryPromise<ProcessModel>;
 
    /** 
      * Sends a "update" message to the GameHub hub.
      * Contract Documentation: ---
      * @return {JQueryPromise of void}
      */
    update() : JQueryPromise<void>;
}
 
interface GameHubClient
{
 
    /**
      * Set this function with a "function(tickCount : number){}" to receive the "tickCountUpdated" message from the GameHub hub.
      * Contract Documentation: ---
      * @param tickCount {number} 
      * @return {void}
      */
    tickCountUpdated : (tickCount : number) => void;
 
    /**
      * Set this function with a "function(model : ProcessModel){}" to receive the "processUpdated" message from the GameHub hub.
      * Contract Documentation: ---
      * @param model {ProcessModel} 
      * @return {void}
      */
    processUpdated : (model : ProcessModel) => void;
}
 
//#endregion GameHub hub
 
//#endregion service contracts
 
 
 
////////////////////
// Data Contracts //
////////////////////
//#region data contracts
 
 
/**
  * Data contract for Crimenuts.App.Ajax.Game.Server.Models.ProcessModel
  */
interface ProcessModel {
    Id : string;
    CaseId : string;
    Members : string[];
    World : string;
    State : string;
}
 
//#endregion data contracts
 
