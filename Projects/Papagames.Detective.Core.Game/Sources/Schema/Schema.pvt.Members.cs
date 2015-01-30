using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public static partial class Scheme
    {
        private static Member DoFindMember(Case.Identifier caseId, int memberId)
        {
            return DoFindCase(caseId).FindMember(memberId);
        }
    }
}