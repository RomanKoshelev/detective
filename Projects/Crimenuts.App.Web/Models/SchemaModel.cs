// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// SchemaModel.cs
// Roman, 2015-03-29 12:56 AM

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crocodev.Common.Identifier;

namespace Crimenuts.App.Web.Models
{
    public class SchemaModel
    {
        // ===================================================================================== []
        // Public
        public IList< CaseModel > Cases
        {
            get { return DoGetCases(); }
        }

        public List< ProcessModel > Processes
        {
            get { return DoGetProcesses(); }
        }

        public static Identifiable< Process, int >.Identifier RunNewProcess(
            Identifiable< Case, int >.Identifier caseId,
            State state = State.Initial )
        {
            var procId = Schema.NewProcess( caseId );
            Schema.SkipProcessTo( procId, state );
            return procId;
        }

        // ===================================================================================== []
        // Pivate
        private static IList< CaseModel > DoGetCases()
        {
            return Schema.Cases.Select( c => new CaseModel( c.Id ) ).ToList();
        }

        private List< ProcessModel > DoGetProcesses()
        {
            return Schema.Processes.Select( p => new ProcessModel( p.Id ) ).ToList();
        }
    }
}