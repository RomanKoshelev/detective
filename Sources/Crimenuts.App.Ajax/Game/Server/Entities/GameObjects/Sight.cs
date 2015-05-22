// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Sight.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Abstract;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.GameObjects
{
    public class Sight : GameObject< SightModel >, ISight
    {
        #region Ctor

        public Sight( Suit suit, Point position, double size )
            : base( suit, position, size ) {}

        #endregion


        #region ISight

        public ISight ISight
        {
            get { return this; }
        }

        string ISight.CellId { get; set; }

        #endregion


        #region Overrides

        protected override SightModel ToModel()
        {
            return new SightModel {
                CellId = ISight.CellId,
                Base = ToGameObjectModel()
            };
        }

        #endregion
    }
}