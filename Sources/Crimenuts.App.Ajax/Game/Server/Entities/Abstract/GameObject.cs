// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// GameObject.cs

using Crimenuts.App.Ajax.Game.Server.Entities.Enums;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Abstract
{
    public abstract class GameObject<T> : Entity< T >, IBody, ISuit
    {
        #region Ctor

        protected GameObject( Suit suit, Point position, double size )
        {
            ISuitable.Suit = suit;
            IBody.Position = position;
            IBody.Size = size;
        }

        #endregion


        #region ISuitable

        public ISuit ISuitable
        {
            get { return this; }
        }

        Suit ISuit.Suit { get; set; }

        #endregion


        #region IBody

        public IBody IBody
        {
            get { return this; }
        }

        Point IBody.Position { get; set; }
        double IBody.Size { get; set; }

        #endregion


        #region Protected

        protected GameObjectModel ToGameObjectModel()
        {
            return new GameObjectModel {
                Id = IIdentifiable.Id,
                Suit = ISuitable.Suit.ToString(),
                Position = IBody.Position.Model,
                Size = IBody.Size
            };
        }

        #endregion
    }
}