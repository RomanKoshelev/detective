﻿





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
    server : IGameHubServer;
 
    /**
      * The functions on this property should be replaced if you want to receive messages from the GameHub hub.
      */
    client : IGameHubClient;
}
 
interface IGameHubServer {
 
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
      * Sends a "autoAnswer" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @return {JQueryPromise of void}
      */
    autoAnswer(processId : string) : JQueryPromise<void>;
 
    /** 
      * Sends a "annotate" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @param memberId {number} 
      * @param note {string} 
      * @return {JQueryPromise of void}
      */
    annotate(processId : string, memberId : number, note : string) : JQueryPromise<void>;
 
    /** 
      * Sends a "earlyArrest" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @param memberId {number} 
      * @return {JQueryPromise of void}
      */
    earlyArrest(processId : string, memberId : number) : JQueryPromise<void>;
 
    /** 
      * Sends a "arrest" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @param memberId {number} 
      * @return {JQueryPromise of void}
      */
    arrest(processId : string, memberId : number) : JQueryPromise<void>;
 
    /** 
      * Sends a "continue" message to the GameHub hub.
      * Contract Documentation: ---
      * @param processId {string} 
      * @return {JQueryPromise of void}
      */
    continue(processId : string) : JQueryPromise<void>;
 
    /** 
      * Sends a "resetProcesses" message to the GameHub hub.
      * Contract Documentation: ---
      * @return {JQueryPromise of void}
      */
    resetProcesses() : JQueryPromise<void>;
}
 
interface IGameHubClient
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
 
    /**
      * Set this function with a "function(){}" to receive the "processesReset" message from the GameHub hub.
      * Contract Documentation: ---
      * @return {void}
      */
    processesReset : () => void;
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
    World : string;
    State : string;
    Today : TodayModel;
    Members : MemberModel[];
    Answers : AnswerModel[];
    Actions : UserActionModel[];
}
 
 
/**
  * Data contract for Crimenuts.App.Ajax.Game.Server.Models.UserActionModel
  */
interface UserActionModel {
    Type : string;
    Args : number[];
    Description : string;
}
 
 
/**
  * Data contract for Crimenuts.App.Ajax.Game.Server.Models.AnswerModel
  */
interface AnswerModel {
    IsValid : boolean;
    AgentName : string;
    AgentId : number;
    SubjectName : string;
    SubjectId : number;
    AnswerText : string;
    AnswerDiaogText : string;
    AnswerCode : string;
    SubjectRelation : string;
}
 
 
/**
  * Data contract for Crimenuts.App.Ajax.Game.Server.Models.MemberModel
  */
interface MemberModel {
    World : string;
    Name : string;
    TodayAnswer : AnswerModel;
    Annotation : string;
    IsActive : boolean;
}
 
 
/**
  * Data contract for Crimenuts.App.Ajax.Game.Server.Models.TodayModel
  */
interface TodayModel {
    Prisoner : string;
    Victim : string;
    Day : number;
    ActiveMurdererNum : number;
}
 
//#endregion data contracts
 
