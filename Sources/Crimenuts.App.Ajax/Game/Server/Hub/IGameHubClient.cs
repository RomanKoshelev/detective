// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameHubClient.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Hub
{
    public interface IGameHubClient
    {
        void TickCountUpdated( int tickCount );
        void ProcessUpdated( ProcessModel model );
        void ProcessesReset();
    }
}