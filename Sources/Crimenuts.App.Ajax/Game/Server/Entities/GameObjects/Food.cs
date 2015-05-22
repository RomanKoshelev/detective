// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Food.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Abstract;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.GameObjects
{
    public class Food : ValuableGameObject< FoodModel >, IFood
    {
        #region Ctor

        public Food(
            Suit suit,
            Point position,
            double size,
            DateTime time,
            double minValue,
            double maxValue,
            double period )
            : base( suit, position, size, value : 0, maxValue : int.MaxValue )
        {
            IFood.CreationTime = time;
            IFood.MinValue = minValue;
            IFood.MaxValue = maxValue;
            IFood.ValuePeriod = period;
        }

        #endregion


        #region IFood

        public IFood IFood
        {
            get { return this; }
        }

        DateTime IFood.CreationTime { get; set; }
        double IFood.MaxValue { get; set; }
        double IFood.ValuePeriod { get; set; }
        double IFood.MinValue { get; set; }

        #endregion


        #region Overrides

        protected override FoodModel ToModel()
        {
            return new FoodModel {
                Base = ToGameObjectModel()
            };
        }

        #endregion
    }
}