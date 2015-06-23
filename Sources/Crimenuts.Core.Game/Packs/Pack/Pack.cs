// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Pack.cs

using Crimenuts.Core.Game.Packs.Profiles;
using Crimenuts.Core.Game.Packs.Worlds;

namespace Crimenuts.Core.Game.Packs.Pack
{
    public class Pack
    {
        public IWorld RandomWorld { set; get; }
        public IWorld SimpsonsWorld { set; get; }

        public const double MurdererRate = 0.20;
        public const double EvidenceRate = 0.30;

        public Pack()
        {
            LoadWorlds();
        }

        private void LoadWorlds()
        {
            var profiles = Profile.LoadAll();

            RandomWorld = new RandomWorld( profiles );
            SimpsonsWorld = new SimpsonsWorld( profiles );
        }
    }
}