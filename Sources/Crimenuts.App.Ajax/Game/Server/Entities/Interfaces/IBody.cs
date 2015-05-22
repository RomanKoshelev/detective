// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IBody.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Interfaces
{
    public interface IBody
    {
        Point Position { get; set; }
        double Size { get; set; }
    }
}