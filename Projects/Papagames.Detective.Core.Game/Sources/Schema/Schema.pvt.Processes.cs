using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        private static void InitProcesses()
        {
            Processes = new List<Process>();

            Cases.ForEach(CreateStartProcesses);
        }

        private static void CreateStartProcesses(Case c)
        {
            const int procNum = 1;
            for (var i = 0; i < procNum; i++)
            {
                DoNewProcess(c).RunFirstNight();
                // todo: Assert that Process Victims == Case Victims
            }
        }

        private static Process DoNewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            // Todo use Identifier compare override
            gprocess.Id = (Process.Identifier) (Processes.Select(p => (int)p.Id).Max() + 1);
            return gprocess;
        }

        private static Process DoFindProcess(Process.Identifier processId)
        {
            var process = Processes.Find(p => p.Id == processId);

            Assert.NotNull(process, "Can't find process {0}", processId);

            return process;
        }

        private static int DoNewProcess(Case.Identifier caseId)
        {
            return DoNewProcess(DoFindCase(caseId)).Id;
        }
    }
}