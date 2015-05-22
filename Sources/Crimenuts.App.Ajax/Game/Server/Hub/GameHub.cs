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

        public void HintSightPosition( string id, PointModel position )
        {
            _gameLogic.HintSightPosition( id, position );
        }

        public void MoveCell( string id, PointModel position )
        {
            _gameLogic.MoveCell( id, position );
        }

        public void MoveSight( string id, PointModel position )
        {
            _gameLogic.MoveSight( id, position );
        }

        public SizeModel GetWorldBounds()
        {
            return _gameLogic.GetWorldBounds();
        }

        public SessionModel GetSession()
        {
            return _gameLogic.GetSession();
        }

        public void ResetSession()
        {
            _gameLogic.ResetSession();
        }

        public void Update()
        {
            // Ignore client's invocation
        }

        #endregion
    }
}