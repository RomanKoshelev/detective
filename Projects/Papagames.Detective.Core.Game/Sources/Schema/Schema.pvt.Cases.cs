using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        private static void InitCases()
        {
            Cases = new List<Case>();
            DoNewCase(WorldId.Simpsons, 5, 1);
            DoNewCase(WorldId.Simpsons, 5, 1);
            DoNewCase(WorldId.Simpsons, 5, 2);
            DoNewCase(WorldId.Simpsons, 5, 2);
            DoNewCase(WorldId.Simpsons, 7, 2);
            DoNewCase(WorldId.Simpsons, 8, 3);
            DoNewCase(WorldId.Simpsons, 8, 3);
            DoNewCase(WorldId.Simpsons, 8, 3);
        }

        private static Case DoNewCase(WorldId worldId, int memberNum, int murderNum)
        {
            var gcase = CreateCase(worldId, memberNum, murderNum);
            RunCaseProcessToGetVictims(gcase);
            return gcase;
        }

        private static void RunCaseProcessToGetVictims(Case gcase)
        {
            var proc = new Process(gcase);
            proc.RunFirstNight();
            proc.Break();

            proc.Victims.ForEach(v => gcase.FindMember(v.Number).IsVictim = true);
        }

        private static Case CreateCase(WorldId worldId, int memberNum, int murderNum)
        {
            var gcase = new Case(WorldMap[worldId], memberNum, murderNum);
            Cases.Add(gcase);
            gcase.Id = (Identifiable<int, Case>.Identifier) (Cases.Select(c => (int)c.Id).Max() + 1);
            return gcase;
        }

        private static Case DoFindCase(Identifiable<int, Case>.Identifier caseId)
        {
            Contract.Requires((int)caseId>0);
            var gcase = Cases.Find(c => c.Id == caseId);

            Assert.NotNull(gcase, "Can't find case {0}", caseId);
            
            return gcase;
        }
    }
}