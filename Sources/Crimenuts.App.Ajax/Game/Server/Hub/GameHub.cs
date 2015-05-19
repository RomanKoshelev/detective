﻿// Celler (c) 2015 Krokodev
// Celler.App.Web
// GameHub.cs

using Celler.App.Web.Game.Server.App;
using Celler.App.Web.Game.Server.Logic;
using Celler.App.Web.Game.Server.Models;

namespace Celler.App.Web.Game.Server.Hub
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

        public void ResetSession( )
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