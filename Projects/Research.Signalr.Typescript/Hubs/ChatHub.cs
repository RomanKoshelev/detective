// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.cs
// Roman, 2015-03-29 7:11 PM

using Microsoft.AspNet.SignalR;

namespace Research.Signalr.Typescript.Hubs
{
    public class ChatHub : Hub
    {
        public void Send( string name, string message )
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage( name, message );
        }
    }
}