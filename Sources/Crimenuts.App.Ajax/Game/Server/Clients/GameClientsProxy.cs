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

        void IGameHubClient.CellMoved( string id, PointModel position )
        {
            Clients.All.CellMoved( id, position );
        }

        void IGameHubClient.SightPositionHinted( string id, PointModel position )
        {
            Clients.All.SightPositionHinted( id, position );
        }

        void IGameHubClient.SightMoved( string id, PointModel position )
        {
            Clients.All.SightMoved( id, position );
        }

        void IGameHubClient.TickCountUpdated( int tickCount )
        {
            Clients.All.TickCountUpdated( tickCount );
        }

        void IGameHubClient.FoodAdded( FoodModel foodModel )
        {
            Clients.All.FoodAdded( foodModel );
        }

        void IGameHubClient.FoodRemoved( string id )
        {
            Clients.All.FoodRemoved( id );
        }

        void IGameHubClient.FoodsUpdated( FoodModel[] models )
        {
            Clients.All.FoodsUpdated( models );
        }

        public void HomesUpdated( HomeModel[] models )
        {
            Clients.All.HomesUpdated( models );
        }

        void IGameHubClient.SessionUpdated( SessionModel model )
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