// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.cs

using System;
using System.Globalization;
using System.Threading;
using Microsoft.AspNet.SignalR;

namespace Research.Signalr.Typescript.Hubs
{
    public partial class ChatHub : Hub
    {
        public ChatHub()
        {
            StartTimer();
        }

        private Timer Timer { get; set; }

        private void StartTimer()
        {
            var delayTime = new TimeSpan( 0, 0, 2 );
            var intervalTime = new TimeSpan( 0, 0, 1 );

            Timer = new Timer( onTimer, null, delayTime, intervalTime );
        }

        private void onTimer( object stateInfo )
        {
            var message = DateTime.Now.ToString( CultureInfo.InvariantCulture );
            Send( new ChatMessage{Name = "Server", Message = message});
        }

        public void Send( ChatMessage msg )
        {
            Clients.All.addNewMessageToPage( msg );
        }
    }
}