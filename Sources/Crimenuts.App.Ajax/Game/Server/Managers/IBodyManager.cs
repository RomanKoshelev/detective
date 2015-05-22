// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IBodyManager.cs

using System.Collections.Generic;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface IBodyManager
    {
        IList< IBody > GetBodies();
    }
}