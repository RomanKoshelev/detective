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
        }

        private static Process DoNewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            gprocess.Id = Processes.Select(p => p.Id).Max() + 1;
            return gprocess;
        }

        private static Process DoFindProcess(int processId)
        {
            var process = Processes.Find(p => p.Id == processId);

            Assert.NotNull(process, "Can't find process {0}", processId);

            return process;
        }
    }
}