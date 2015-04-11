// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.cs
// Roman, 2015-04-05 9:13 PM

using System;
using Microsoft.AspNet.SignalR;

namespace Research.Signalr.Typescript.Hubs
{
    public class ChatMessage
    {
        public string Name { get; set; }
        public string Message { get; set; }
    }

    public class ChatHub : Hub
    {
        public void Send( ChatMessage msg )
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage( msg );
            Clients.All.serverTick( DateTime.Now );
        }
    }

    public interface IChatHubClient
    {
        void addNewMessageToPage( ChatMessage msg );
        void serverTick( DateTime time);
    }
}