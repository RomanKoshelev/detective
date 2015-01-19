using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        private static readonly List<Case> Cases = new List<Case>();

        private static void InitCases()
        {
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
            var gcase = new Case(WorldMap[worldId], memberNum, murderNum);
            Cases.Add(gcase);
            gcase.Id = Cases.Select(c => c.Id).Max() + 1;
            return gcase;
        }

        private static IList<Case> DoCasesInfo()
        {
            return Cases;
        }

        private static Case DoFindCase(int caseId)
        {
            var gcase = Cases.Find(c => c.Id == caseId);

            Assert.NotNull(gcase, "Can't find case {0}", caseId);
            
            return gcase;
        }
    }
}

namespace Papagames.Detective.Utils
{
}