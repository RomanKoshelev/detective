// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessModel.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class ProcessModel : IModel< Process >
    {
        #region Ctor

        public ProcessModel( Process process )
        {
            IModel.InitFrom( process );
        }

        #endregion


        #region Properties

        public string Id { get; set; }
        public string CaseId { get; set; }
        public List< string > Members { get; set; }
        public string World { get; set; }

        #endregion


        #region IModel

        private IModel< Process > IModel
        {
            get { return this; }
        }

        void IModel< Process >.InitFrom( Process process )
        {
            Id = process.Id.Value.ToString();
            CaseId = process.CaseId.Value.ToString();
            World = process.Case.World.Name;
            Members = process.Members.Select( m => m.Name ).ToList();
        }

        #endregion
    }
}