namespace Papagames.Detective.Core.Game
{
    public static partial class Schema
    {
        public enum WorldId
        {
            Simpsons,
            Random
        }

        static Schema()
        {
            InitWorlds();
            InitCases();
        }

        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            return DoNewCase(worldId, memberNum, murderNum);
        }
        
        public static Process NewProcess(Case gcase)
        {
            return DoNewProcess(gcase);
        }
    }
}