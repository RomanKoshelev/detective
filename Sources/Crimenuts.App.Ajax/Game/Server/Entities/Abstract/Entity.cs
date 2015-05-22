// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Entity.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Abstract
{
    public abstract class Entity<T> : IIdentifiable, IModelled< T >
    {
        #region Ctor

        protected Entity()
        {
            IIdentifiable.Id = Guid.NewGuid().ToString();
        }

        #endregion


        #region IIdentifiable

        public IIdentifiable IIdentifiable
        {
            get { return this; }
        }

        string IIdentifiable.Id { get; set; }

        #endregion


        #region IModelled

        public IModelled< T > IModelled
        {
            get { return this; }
        }

        T IModelled< T >.Model
        {
            get { return ToModel(); }
        }

        #endregion


        #region Abstract

        protected abstract T ToModel();

        #endregion
    }
}