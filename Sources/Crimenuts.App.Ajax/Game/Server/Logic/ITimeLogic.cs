// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ITimeLogic.cs

using System;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public interface ITimeLogic
    {
        DateTime LastTime { get; set; }
        DateTime CurrentTime { get; set; }
        int GetUpdateInterval();
        void Update();
    }
}