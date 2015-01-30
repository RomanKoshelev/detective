using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public static partial class Scheme
    {
        // ===================================================================================== []
        // Constructor
        static Scheme()
        {
            InitMaster();
            InitWorlds();
            InitCases();
            InitProcesses();
        }

        // ===================================================================================== []
        // Worlds
        public enum WorldId
        {
            Simpsons,
            Random
        }

        // ===================================================================================== []
        // Master
        public static Master Master { get; private set; }

        // ===================================================================================== []
        // Cases
        public static List<Case> Cases { get; private set; }

        public static Case FindCase(Case.Identifier caseId)
        {
            return DoFindCase(caseId);
        }

        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            return DoNewCase(worldId, memberNum, murderNum);
        }

        // ===================================================================================== []
        // Processes
        public static List<Process> Processes { get; private set; }

        public static Process NewProcess(Case gcase)
        {
            return DoNewProcess(gcase);
        }

        public static Process.Identifier NewProcess(Case.Identifier caseId)
        {
            return NewProcess(DoFindCase(caseId)).Id;
        }

        public static Process FindProcess(Process.Identifier processId)
        {
            return DoFindProcess(processId);
        }
        public static void ExecuteProcess(Process.Identifier processId, Process.UserAction.ActionType actionType,
            int[] actionParams, bool autoSkip = true)
        {
            DoExecuteProcess(processId, actionType, actionParams, autoSkip);
        }

        public static void SkipProcessTo(Process.Identifier procId, State state)
        {
            DoSkipProcessTo(procId, state);
        }


        // ===================================================================================== []
        // Members
        public static Member FindMember(Case.Identifier caseId, int memberId)
        {
            return DoFindMember(caseId, memberId);
        }
    }
}