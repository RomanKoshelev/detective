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

        public ProcessModel GetProcess( string processId )
        {
            return _gameLogic.GetProcess( processId );
        }

        public void AutoAnswer( string processId )
        {
            _gameLogic.AutoAnswer( processId );
        }

        public void Mark( string processId, int memberId )
        {
            _gameLogic.Mark( processId, memberId );
        }

        public void EarlyArrest( string processId, int memberId )
        {
            _gameLogic.EarlyArrest( processId, memberId );
        }

        public void Arrest( string processId, int memberId )
        {
            _gameLogic.Arrest( processId, memberId );
        }

        public void Continue( string processId )
        {
            _gameLogic.Continue( processId );
        }

        public void ResetProcesses()
        {
            _gameLogic.ResetProcesses();
        }

        #endregion
    }
}