// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Schema.pvt.Members.cs
// Roman, 2015-03-29 12:57 AM

using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game
{
    public static partial class Schema
    {
        private static Member DoFindMember( Identifiable< Case, int >.Identifier caseId, int memberId )
        {
            return DoFindCase( caseId ).FindMember( memberId );
        }
    }
}