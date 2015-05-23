// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Members.cs

using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game.Schema
{
    public static partial class Schema
    {
        private static Member.Member DoFindMember( Identifiable< Case.Case, int >.Identifier caseId, int memberId )
        {
            return DoFindCase( caseId ).FindMember( memberId );
        }
    }
}