using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        public enum WorldId
        {
            Simpsons,
            Random
        }

        static Schema()
        {
            InitWorlds();
            InitCases();
            InitProcesses();
        }

        public static List<Case> Cases { get; private set; }
        public static List<Process> Processes { get; private set; }

        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            return DoNewCase(worldId, memberNum, murderNum);
        }

        public static Process NewProcess(Case gcase)
        {
            return DoNewProcess(gcase);
        }

        public static Case FindCase(Case.Identifier caseId)
        {
            return DoFindCase(caseId);
        }

        public static Member FindMember(Case.Identifier caseId, int memberId)
        {
            return DoFindMember(caseId, memberId);
        }

        public static Process FindProcess(Process.Identifier processId)
        {
            return DoFindProcess(processId);
        }

        public static int NewProcess(Case.Identifier caseId)
        {
            return DoNewProcess(caseId);
        }

        public static void PlayProcess(Process.Identifier processId, Process.UserAction.ActionType actionType,
            int[] actionParams, bool autoSkip = true)
        {
            DoPlayProcess(processId, actionType, actionParams, autoSkip);
        }
    }
}