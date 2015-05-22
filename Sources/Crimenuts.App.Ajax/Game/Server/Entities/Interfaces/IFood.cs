// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IFood.cs

using System;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Interfaces
{
    public interface IFood
    {
        DateTime CreationTime { get; set; }
        double MaxValue { get; set; }
        double ValuePeriod { get; set; }
        double MinValue { get; set; }
    }
}