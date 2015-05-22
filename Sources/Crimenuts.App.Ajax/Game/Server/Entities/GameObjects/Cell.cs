// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Cell.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Abstract;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.GameObjects
{
    public class Cell : ValuableGameObject< CellModel >, ICell
    {
        #region Ctor

        public Cell( Suit suit, Point position, double size, double value = 0, double maxValue = int.MaxValue )
            : base( suit, position, size, value, maxValue ) {}

        #endregion


        #region ICell

        public ICell ICell
        {
            get { return this; }
        }

        string ICell.HomeId { get; set; }
        string ICell.SightId { get; set; }

        #endregion


        #region Overrrides

        protected override CellModel ToModel()
        {
            return new CellModel {
                HomeId = ICell.HomeId,
                SightId = ICell.SightId,
                Base = ToGameObjectModel()
            };
        }

        #endregion
    }
}