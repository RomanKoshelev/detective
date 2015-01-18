using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        private static readonly List<Process> Processes = new List<Process>();

        private static Process DoNewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            return gprocess;
        }
    }
}