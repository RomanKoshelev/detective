// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IModel.cs

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public interface IModel<T>
    {
        void InitFrom( T entety );
    }
}