// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ISightManager.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface ISightManager
    {
        void MoveSight( string id, PointModel position );
        Sight AddSight( Suit suit, Point position, double size );
    }
}