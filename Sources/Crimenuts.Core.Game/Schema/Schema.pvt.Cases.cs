// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Cases.cs

using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using Crimenuts.Utils;
using Crocodev.Common.Identifier;
using MoreLinq;

namespace Crimenuts.Core.Game.Schema
{
    public static partial class Schema
    {
        private static void InitCases()
        {
            Cases = new List< Case.Case >();
            for( var i = Game.Master.Master.MinMembersNum; i <= Game.Master.Master.MaxMembersNum; i++ ) {
                for( var j = Game.Master.Master.MinMurderersNum; j <= Game.Master.Master.MaxMurderersNum( i ); j++ ) {
                    DoNewCase( WorldId.Simpsons, i, j );
                }
            }
        }

        private static Case.Case DoNewCase( WorldId worldId, int memberNum, int murderNum )
        {
            var gcase = CreateCase( worldId, memberNum, murderNum );
            RunCaseProcessToGetVictims( gcase );
            return gcase;
        }

        private static void RunCaseProcessToGetVictims( Case.Case gcase )
        {
            var proc = new Process.Process( gcase );
            proc.RunFirstNightUntilQuestioning();
            proc.Stop();

            proc.Victims.ForEach( v => gcase.FindMember( v.Number ).IsVictim = true );
        }

        private static Case.Case CreateCase( WorldId worldId, int memberNum, int murderNum )
        {
            var gcase = new Case.Case( WorldMap[ worldId ], memberNum, murderNum );
            Cases.Add( gcase );
            gcase.Id = ( Identifiable< Case.Case, int >.Identifier ) ( Cases.Select( c => ( int ) c.Id ).Max() + 1 );
            return gcase;
        }

        private static Case.Case DoFindCase( Identifiable< Case.Case, int >.Identifier caseId )
        {
            Contract.Requires( ( int ) caseId > 0 );
            var gcase = Cases.Find( c => c.Id == caseId );

            CrimenutsAssert.NotNull( gcase, "Can't find case {0}", caseId );

            return gcase;
        }
    }
}