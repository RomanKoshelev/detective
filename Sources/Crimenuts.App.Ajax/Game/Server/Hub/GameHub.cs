// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// GameHub.cs

using Crimenuts.App.Ajax.Game.Server.App;
using Crimenuts.App.Ajax.Game.Server.Logic;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Hub
{
    public class GameHub : Microsoft.AspNet.SignalR.Hub, IGameLogic
    {
        private readonly IGameLogic _gameLogic;

        public GameHub()
        {
            _gameLogic = GameApplication.Instance.GameLogic;
        }

        public string GetPlayerId()
        {
            return Context.ConnectionId;
        }


        #region IGameLogic

        public ProcessModel GetProcess()
        {
            return _gameLogic.GetProcess();
        }

        public void Update()
        {
            // Ignore client's invocation
        }

        #endregion
    }
}