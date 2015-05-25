// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IManager.cs

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface IManager<out T>
    {
        T GetModel( string id );
    }
}