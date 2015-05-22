// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IModelled.cs

namespace Crimenuts.App.Ajax.Game.Server.Entities.Interfaces
{
    public interface IModelled<out T>
    {
        T Model { get; }
    }
}