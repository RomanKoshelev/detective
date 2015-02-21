using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Utils;

namespace Crimenuts.App.Web.Models
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

        public static Process.Identifier RunNewProcess(Case.Identifier caseId, State state=State.Initial)
        {
            var procId = Schema.NewProcess(caseId);
            Schema.SkipProcessTo(procId, state);
            return procId;
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