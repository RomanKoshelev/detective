// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameHubClient.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Hub
{
    public interface IGameHubClient
    {
        void SightPositionHinted( string id, PointModel position );
        void CellMoved( string id, PointModel position );
        void SightMoved( string id, PointModel position );
        void TickCountUpdated( int tickCount );
        void FoodAdded( FoodModel foodModel );
        void FoodRemoved( string id );
        void FoodsUpdated( FoodModel[] models );
        void HomesUpdated( HomeModel[] models );
        void SessionUpdated( SessionModel model );
    }
}