// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Cases.cs

using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Masters;
using Crimenuts.Core.Game.Processes;
using Crimenuts.Utils;
using Crimenuts.Utils.Traces;
using Krokodev.Common.Identifier;
using MoreLinq;

namespace Crimenuts.Core.Game.Schemas
{
    public static partial class Schema
    {
        private static void InitCases()
        {
            Cases = new List< Case >();
            for( var i = Master.MinMembersNum; i <= Master.MaxMembersNum; i++ ) {
                for( var j = Master.MinMurderersNum; j <= Master.MaxMurderersNum( i ); j++ ) {
                    DoNewCase( WorldId.Simpsons, i, j );
                }
            }
        }

        private static Case DoNewCase( WorldId worldId, int memberNum, int murderNum )
        {
            var gcase = CreateCase( worldId, memberNum, murderNum );
            RunCaseProcessToGetVictims( gcase );
            return gcase;
        }

        private static void RunCaseProcessToGetVictims( Case gcase )
        {
            var proc = new Process( gcase );
            proc.RunFirstNightUntil(State.Questioning);
            proc.Stop();

            proc.Victims.ForEach( v => gcase.FindMember( v.Number ).IsVictim = true );
        }

        private static Case CreateCase( WorldId worldId, int memberNum, int murderNum )
        {
            var gcase = new Case( WorldMap[ worldId ], memberNum, murderNum );
            Cases.Add( gcase );
            gcase.Id = ( Identifiable< Case, int >.Identifier ) ( Cases.Select( c => ( int ) c.Id ).Max() + 1 );
            return gcase;
        }

        private static Case DoFindCase( Identifiable< Case, int >.Identifier caseId )
        {
            Contract.Requires( ( int ) caseId > 0 );
            var gcase = Cases.Find( c => c.Id == caseId );

            CrimenutsAssert.NotNull( gcase, "Can't find case {0}", caseId );

            return gcase;
        }
    }
}