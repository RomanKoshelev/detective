// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameLogic.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public interface IGameLogic
    {
        void MoveCell( string id, PointModel position );
        void MoveSight( string id, PointModel position );
        void HintSightPosition( string id, PointModel position );
        SizeModel GetWorldBounds();
        SessionModel GetSession();
        void ResetSession();
        void Update();
    }
}