using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class SchemaModel
    {
        // ===================================================================================== []
        // Public
        public IList<CaseModel> Cases
        {
            get { return DoGetCases(); }
        }

        public List<ProcessModel> Processes
        {
            get { return DoGetProcesses(); }
        }

        // ===================================================================================== []
        // Pivate
        private static IList<CaseModel> DoGetCases()
        {
            return Schema.Cases.Select(c => new CaseModel(c.Id)).ToList();
        }
        private List<ProcessModel> DoGetProcesses()
        {
            return Schema.Processes.Select(p => new ProcessModel(p.Id)).ToList();
        }
    }
}