// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Worlds.cs

using System.Collections.Generic;
using Crimenuts.Core.Game.Pack.Worlds;

namespace Crimenuts.Core.Game.Schema
{
    public static partial class Schema
    {
        private static readonly IDictionary< WorldId, IWorld > WorldMap = new Dictionary< WorldId, IWorld >();

        private static void InitWorlds()
        {
            WorldMap.Add( WorldId.Simpsons, Pack.SimpsonsWorld );
            WorldMap.Add( WorldId.Random, Pack.RandomWorld );
        }
    }
}