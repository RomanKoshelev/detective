// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.cs

using System;
using System.Globalization;
using Microsoft.AspNet.SignalR;
using NLog;

namespace Research.Signalr.Typescript.Hubs
{
    public partial class ChatHub : Hub
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();

        public ChatHub()
        {
            Logger.Trace( "ChatHub ctor" );
            StartTimer();
        }

        private void onTimer( object stateInfo )
        {
            var message = string.Format("{0} {1}", _connectionId, DateTime.Now);
            var msg = new ChatMessage { Name = "Server", Message = message };

            Logger.Trace( "OnTimer [{0}]", _connectionId );
            Clients.Client( _connectionId ).addNewMessageToPage( msg  );
        }

        public void Send( ChatMessage msg )
        {
            Logger.Trace( "Send()" );
            Clients.All.addNewMessageToPage( msg );
        }
    }
}