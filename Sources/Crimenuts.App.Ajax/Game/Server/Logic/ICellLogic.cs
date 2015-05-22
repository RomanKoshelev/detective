// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ICellLogic.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    internal interface ICellLogic : IAuxLogic
    {
        void MoveCell( string id, Point position );
        Cell AddCell( Suit suit, Point position );
    }
}