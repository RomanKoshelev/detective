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
            // >> CreateStartProcesses
            const int procNum = 1;
            for (var i = 0; i < procNum; i++)
            {
                DoNewProcess(c).RunFirstNightUntilQuestioning();
            }
        }

        private static Process DoNewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            gprocess.Id = (Process.Identifier) (Processes.Select(p => (int)p.Id).Max() + 1);
            return gprocess;
        }

        private static Process DoFindProcess(Process.Identifier processId)
        {
            var process = Processes.Find(p => p.Id == processId);

            Assert.NotNull(process, "Can't find process {0}", processId);

            return process;
        }

        private static void DoExecuteProcess(Process.Identifier processId, Process.UserAction.ActionType actionType, int[] actionParams, bool autoSkip)
        {
            DoFindProcess(processId).ExecuteUserAction(actionType, actionParams, autoSkip);
        }

        private static void DoSkipProcessTo(Process.Identifier processId, State state)
        {
            DoFindProcess(processId).SkipTo(state);
        }
    }
}