// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessManager.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Clients;
using Crimenuts.App.Ajax.Game.Server.Entities.Abstract;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public class ProcessManager : Entity< ProcessModel >, IProcess
    {
        #region Constructor

        public ProcessManager( IGameClient clients )
        {
            _id = Guid.NewGuid().ToString();
            _clients = clients;
        }

        #endregion


        #region IProcess

        public IProcess Process
        {
            get { return this; }
        }

        #endregion


        #region Fields

        private readonly string _id;
        private readonly IGameClient _clients;

        #endregion


        #region Overrides

        protected override ProcessModel ToModel()
        {
            return new ProcessModel {
                Id = _id,
            };
        }

        #endregion
    }
}