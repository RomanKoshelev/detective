using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class SchemeModel
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
            var procId = Scheme.NewProcess(caseId);
            Scheme.SkipProcessTo(procId, state);
            return procId;
        }

        // ===================================================================================== []
        // Pivate
        private static IList<CaseModel> DoGetCases()
        {
            return Scheme.Cases.Select(c => new CaseModel(c.Id)).ToList();
        }
        private List<ProcessModel> DoGetProcesses()
        {
            return Scheme.Processes.Select(p => new ProcessModel(p.Id)).ToList();
        }
    }
}