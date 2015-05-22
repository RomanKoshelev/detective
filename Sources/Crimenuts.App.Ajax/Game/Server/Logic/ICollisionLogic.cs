// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ICollisionLogic.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public interface ICollisionLogic
    {
        event Action< IBody, IBody > onCollision;
    }
}