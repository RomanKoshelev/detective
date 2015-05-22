// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IFoodManager.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface IFoodManager
    {
        Food AddFood(
            Suit suit,
            Point position,
            double size,
            DateTime time,
            double minValue,
            double maxValue,
            double period );

        void RemoveFood( Food food );
        int GetFoodCount();
        void UpdateFoods( Action< Food > action );
    }
}