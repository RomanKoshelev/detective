// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ICellManager.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface ICellManager
    {
        void MoveCell( string id, Point position );
        Cell AddCell( Suit suit, Point position, double size );
    }
}