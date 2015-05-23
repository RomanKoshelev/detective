// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameLogic.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public interface IGameLogic
    {
        ProcessModel GetProcess();
        void Update();
    }
}