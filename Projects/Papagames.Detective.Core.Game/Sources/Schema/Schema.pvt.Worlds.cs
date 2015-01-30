using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public static partial class Scheme
    {
        private static readonly IDictionary<WorldId, IWorld> WorldMap = new Dictionary<WorldId, IWorld>();

        private static void InitWorlds()
        {
            WorldMap.Add(WorldId.Simpsons, Pack.SimpsonsWorld);
            WorldMap.Add(WorldId.Random, Pack.RandomWorld);
        }
    }
}