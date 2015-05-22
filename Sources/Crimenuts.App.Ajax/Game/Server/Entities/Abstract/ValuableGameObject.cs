// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ValuableGameObject.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Abstract
{
    public abstract class ValuableGameObject<T> : GameObject< T >, IValuable

    {
        #region Ctor

        protected ValuableGameObject( Suit suit, Point position, double size, double value, double maxValue )
            : base( suit, position, size )
        {
            IValuable.Value = value;
            IValuable.MaxValue = maxValue;
        }

        #endregion


        #region IValuable

        public IValuable IValuable
        {
            get { return this; }
        }

        double IValuable.Value { get; set; }
        double IValuable.MaxValue { get; set; }

        #endregion
    }
}