using System.Collections.Generic;

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
            return gcase;
        }
    }
}