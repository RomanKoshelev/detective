using System.Collections.Generic;

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
        }

        public static List<Case> Cases { get; private set; }

        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            return DoNewCase(worldId, memberNum, murderNum);
        }
        
        public static Process NewProcess(Case gcase)
        {
            return DoNewProcess(gcase);
        }

        public static Case FindCase(int caseId)
        {
            return DoFindCase(caseId);
        }

        public static Member FindMember(int caseId, int memberId)
        {
            return DoFindMember(caseId, memberId);
        }
    }
}