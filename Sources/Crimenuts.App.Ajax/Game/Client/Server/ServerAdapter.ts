﻿module Crimenuts {
    export class ServerAdapter implements IGameHubServer, IGameHubClient, IServerObserver {

        constructor() {
            this.setupClientCallbacks();
            this.startHub();
        }

        // --------------------------------------------------------[]
        // IGameHubServer
        getPlayerId(): JQueryPromise<string> {
            return this.server.getPlayerId();
        }

        getProcess( processId: string ): JQueryPromise<ProcessModel> {
            return this.server.getProcess( processId );
        }

        autoAnswer( processId: string ): JQueryPromise<void> {
            return this.server.autoAnswer( processId );
        }

        annotate( processId: string, memberId: number, note: string ): JQueryPromise<void> {
            return this.server.annotate ( processId, memberId, note );
        }

        arrest( processId: string, memberId: number ): JQueryPromise<void> {
            return this.server.arrest ( processId, memberId );
        }

        earlyArrest( processId: string, memberId: number ): JQueryPromise<void> {
            return this.server.earlyArrest( processId, memberId );
        }

        continue( processId: string ): JQueryPromise<void> {
            return this.server.continue( processId );
        }

        resetProcesses(): JQueryPromise<void> {
            return this.server.resetProcesses();
        }

        // --------------------------------------------------------[]
        // IServerObserver
        onServerStarted = new Phaser.Signal();
        onProcessUpdated = new Phaser.Signal();
        onTickCountUpdated = new Phaser.Signal();
        onProcessesReset = new Phaser.Signal();

        // --------------------------------------------------------[]
        // IGameHubClient
        tickCountUpdated( count: number ) {
            this.onTickCountUpdated.dispatch( count );
        }

        processUpdated( model: ProcessModel ): void {
            this.onProcessUpdated.dispatch( model );
        }

        processesReset(): void {
            this.onProcessesReset.dispatch();
        }

        // --------------------------------------------------------[]
        // Fields
        private server = $.connection.gameHub.server;
        private client = $.connection.gameHub.client;

        // --------------------------------------------------------[]
        // Utils
        private setupClientCallbacks() {
            this.client.tickCountUpdated = ( count: number ) => { this.tickCountUpdated( count ); };
            this.client.processUpdated = ( model: ProcessModel ) => { this.processUpdated( model ); };
            this.client.processesReset = () => { this.processesReset(); };
        }

        private startHub() {
            $.connection.hub.start().done( () => { this.onServerStarted.dispatch() } );
        }
    }
}