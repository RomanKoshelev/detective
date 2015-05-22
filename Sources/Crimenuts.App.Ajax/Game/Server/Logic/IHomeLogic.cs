// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IHomeLogic.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    internal interface IHomeLogic : IAuxLogic
    {
        void ReceiveLootToHome( Suit suit, double loot );
        Home AddHome( Suit suit );
    }
}