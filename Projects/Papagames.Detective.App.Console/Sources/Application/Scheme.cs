using System.Collections.Generic;
using Papagames.Detective.Core;

namespace Papagames.Detective.App.Console
{
    public static class Scheme
    {
        private static readonly Pack Pack = new Pack();
        private static readonly List<Case> Cases = new List<Case>();
        private static readonly List<Process> Processes = new List<Process>();
        private static readonly IDictionary<WorldId, IWorld> WorldMap = new Dictionary<WorldId, IWorld>();

        static Scheme()
        {
            WorldMap.Add(WorldId.Simpsons, Pack.SimpsonsWorld);
            WorldMap.Add(WorldId.Random, Pack.RandomWorld);
        }
        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            var gcase = new Case(WorldMap[worldId], memberNum, murderNum);
            Cases.Add(gcase);
            return gcase;
        }

        public enum WorldId
        {
            Simpsons,
            Random
        }

        public static Process NewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            return gprocess;
        }
    }
}