// Celler (c) 2015 Krokodev
// Celler.App.Web
// ValuableGameObject.cs

using Celler.App.Web.Game.Server.Entities.Enums;
using Celler.App.Web.Game.Server.Entities.Interfaces;
using Celler.App.Web.Game.Server.Entities.Structs;

namespace Celler.App.Web.Game.Server.Entities.Abstract
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