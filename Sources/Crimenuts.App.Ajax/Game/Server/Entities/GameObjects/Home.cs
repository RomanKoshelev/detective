// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Home.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Abstract;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.GameObjects
{
    public class Home : ValuableGameObject< HomeModel >, IHome
    {
        #region Ctor

        public Home( Suit suit, Point position, double size, double value, double maxValue )
            : base( suit, position, size, value, maxValue ) {}

        #endregion


        #region IHome

        public IHome IHome
        {
            get { return this; }
        }

        #endregion


        #region Overrides

        protected override HomeModel ToModel()
        {
            return new HomeModel {
                Value = IValuable.Value,
                MaxValue = IValuable.MaxValue,
                Base = ToGameObjectModel()
            };
        }

        #endregion
    }
}