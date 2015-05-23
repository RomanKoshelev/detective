// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessManager.cs

using System;
using System.Linq;
using Crimenuts.App.Ajax.Game.Server.Clients;
using Crimenuts.App.Ajax.Game.Server.Models;
using Crimenuts.Core.Game.Processes;
using Crimenuts.Core.Game.Schemas;
using Krokodev.Common.Identifier;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public class ProcessManager : IProcessManager
    {
        #region Constructor

        public ProcessManager( IGameClient clients )
        {
            _clients = clients;
        }

        #endregion


        #region IProcess

        public IProcessManager IProcessManager
        {
            get { return this; }
        }

        ProcessModel IProcessManager.GetModel( string processId )
        {
            var id = ( Identifiable< Process, int >.Identifier ) Convert.ToInt64( processId );
            var process = Schema.FindProcess( id );
            return new ProcessModel {
                Id = process.Id.Value.ToString(),
                CaseId = process.CaseId.Value.ToString(),
                Company = new CompanyModel {
                    Members = process.Members.Select(m=>m.Name).ToList()
                }
            };
        }

        #endregion


        #region Fields

        private readonly IGameClient _clients;

        #endregion
    }
}