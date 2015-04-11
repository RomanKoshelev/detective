// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.pvt.Users.cs

using System.Linq;
using System.Threading.Tasks;

namespace Research.Signalr.Typescript.Hubs
{
    public partial class ChatHub
    {
        private static readonly ConnectionMapping< string > Connections =
            new ConnectionMapping< string >();

        public override Task OnConnected()
        {
            var name = Context.User.Identity.Name;

            Connections.Add( name, Context.ConnectionId );

            return base.OnConnected();
        }

        public override Task OnDisconnected( bool stopCalled )
        {
            var name = Context.User.Identity.Name;

            Connections.Remove( name, Context.ConnectionId );

            return base.OnDisconnected( stopCalled );
        }

        public override Task OnReconnected()
        {
            var name = Context.User.Identity.Name;

            if( !Connections.GetConnections( name ).Contains( Context.ConnectionId ) ) {
                Connections.Add( name, Context.ConnectionId );
            }

            return base.OnReconnected();
        }
    }
}