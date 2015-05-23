// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// GameClientsProxy.cs

using Crimenuts.App.Ajax.Game.Server.Hub;
using Crimenuts.App.Ajax.Game.Server.Models;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Crimenuts.App.Ajax.Game.Server.Clients
{
    public class GameClientsProxy : IGameClient
    {
        #region IGameHubClient

        void IGameHubClient.TickCountUpdated( int tickCount )
        {
            Clients.All.TickCountUpdated( tickCount );
        }

        void IGameHubClient.ProcessUpdated( ProcessModel model )
        {
            Clients.All.SessionUpdated( model );
        }

        #endregion


        #region Static

        private static IHubConnectionContext< dynamic > Clients
        {
            get { return Context.Clients; }
        }

        private static IHubContext Context
        {
            get { return GlobalHost.ConnectionManager.GetHubContext< GameHub >(); }
        }

        #endregion
    }
}