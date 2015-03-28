// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Schema.pvt.Worlds.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;

namespace Crimenuts.Core.Game
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