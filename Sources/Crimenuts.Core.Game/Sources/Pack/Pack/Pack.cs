// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Pack.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Core.Game
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