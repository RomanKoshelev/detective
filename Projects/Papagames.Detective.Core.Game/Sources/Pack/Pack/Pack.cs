namespace Papagames.Detective.Core.Game
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

            RandomWorld = new RandomWorld(profiles);
            SimpsonsWorld = new SimpsonsWorld(profiles);
        }
    }
}