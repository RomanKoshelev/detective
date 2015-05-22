// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IHomeManager.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface IHomeManager
    {
        Home AddHome( Suit suit, Point position, double size, double value, double maxValue );
        void UpdateHomes( Func< Home, bool > condition, Action< Home > modificator );
    }
}