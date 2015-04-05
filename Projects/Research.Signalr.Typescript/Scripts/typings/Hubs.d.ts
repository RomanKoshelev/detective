





// Get signalr.d.ts.ts from https://github.com/borisyankov/DefinitelyTyped (or delete the reference)
 
////////////////////
// available hubs //
////////////////////
//#region available hubs
 
interface SignalR {
 
    /**
      * The hub implemented by Research.Signalr.Typescript.Hubs.ChatHub
      */
    chatHub : ChatHub;
}
//#endregion available hubs
 
///////////////////////
// Service Contracts //
///////////////////////
//#region service contracts
 
//#region ChatHub hub
 
interface ChatHub {
    
    /**
      * This property lets you send messages to the ChatHub hub.
      */
    server : ChatHubServer;
 
    /**
      * The functions on this property should be replaced if you want to receive messages from the ChatHub hub.
      */
    client : any;
}
 
interface ChatHubServer {
 
    /** 
      * Sends a "send" message to the ChatHub hub.
      * Contract Documentation: ---
      * @param name {string} 
      * @param message {string} 
      * @return {JQueryPromise of void}
      */
    send(name : string, message : string) : JQueryPromise<void>;
}
 
//#endregion ChatHub hub
 
//#endregion service contracts
 
 
 
////////////////////
// Data Contracts //
////////////////////
//#region data contracts
 
//#endregion data contracts
 
