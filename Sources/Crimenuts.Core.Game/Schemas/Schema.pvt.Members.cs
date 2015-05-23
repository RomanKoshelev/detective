// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Members.cs

using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Members;
using Krokodev.Common.Identifier;

namespace Crimenuts.Core.Game.Schemas
{
    public static partial class Schema
    {
        private static Member DoFindMember( Identifiable< Case, int >.Identifier caseId, int memberId )
        {
            return DoFindCase( caseId ).FindMember( memberId );
        }
    }
}