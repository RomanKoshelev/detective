// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// HomeLogic.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Config;
using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.GameObjects;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Managers;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    internal class HomeLogic : IHomeLogic
    {
        #region Ctor

        public HomeLogic( IGameLogic game, IHomeManager homeManager )
        {
            _game = game;
            _homeManager = homeManager;
        }

        #endregion


        #region IAuxLogic

        void IAuxLogic.Update()
        {
            // Do nothing
        }

        #endregion


        #region IHomeLogic

        void IHomeLogic.ReceiveLootToHome( Suit suit, double loot )
        {
            _homeManager.UpdateHomes(
                condition : home => home.ISuitable.Suit == suit,
                modificator : home => {
                    home.IValuable.Value += loot;
                    home.IValuable.Value = Math.Max( home.IValuable.Value, 0 );
                    home.IValuable.Value = Math.Min( home.IValuable.Value, home.IValuable.MaxValue );
                } );
        }

        Home IHomeLogic.AddHome( Suit suit )
        {
            return _homeManager.AddHome( suit, GetCornerCoords( suit ), HomeSize, HomeIniLoot, HomeMaxLoot );
        }

        #endregion


        #region Consts

        private const double HomeIniLoot = Settings.Loot.Home.Init;
        private const double HomeMaxLoot = Settings.Loot.Home.Max;
        private const double HomeSize = Settings.World.Home.Size;

        #endregion


        #region Fields

        private readonly IHomeManager _homeManager;
        private readonly IGameLogic _game;

        #endregion


        #region Utils

        private Point GetCornerCoords( Suit suit )
        {
            var world = _game.GetWorldBounds();

            const double margin = HomeSize/2;
            switch( suit ) {
                case Suit.Blue :
                    return new Point( margin, world.Width - margin );
                case Suit.Red :
                    return new Point( world.Height - margin, margin );
            }
            return new Point();
        }

        #endregion
    }
}