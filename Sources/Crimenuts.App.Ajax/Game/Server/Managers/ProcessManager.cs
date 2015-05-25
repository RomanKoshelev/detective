// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Manager.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Clients;
using Crimenuts.App.Ajax.Game.Server.Models;
using Crimenuts.Core.Game.Processes;
using Crimenuts.Core.Game.Schemas;
using Krokodev.Common.Identifier;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public class ProcessManager : IManager< ProcessModel >
    {
        #region Constructor

        public ProcessManager( IGameClient clients )
        {
            _clients = clients;
        }

        #endregion


        #region IManager

        public IManager< ProcessModel > IManager
        {
            get { return this; }
        }

        ProcessModel IManager< ProcessModel >.GetModel( string processId )
        {
            var id = ( Identifiable< Process, int >.Identifier ) Convert.ToInt64( processId );
            var process = Schema.FindProcess( id );
            var model = new ProcessModel( process );
            return model;
        }

        #endregion


        #region Fields

        private readonly IGameClient _clients;

        #endregion
    }
}