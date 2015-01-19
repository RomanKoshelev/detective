using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        private static Member DoFindMember(int caseId, int memberId)
        {
            return DoFindCase(caseId).FindMember(memberId);
        }
    }
}