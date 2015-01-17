using System;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Program
    {
        private static readonly Player Player = new Player();
        private static void Main()
        {
            try
            {
                PlayGame(Schema.WorldId.Simpsons, 8, 3, autoMode: true);
            }
            catch (Exception e)
            {
                PrintException(e);                
            }
        }

        private static void PlayGame(Schema.WorldId worldId, int memberNum, int murderNum, bool autoMode = false)
        {
            Player.SilenceMode = false;
            Player.AutoMode = autoMode;

            var gcase = Schema.NewCase(worldId, memberNum, murderNum);
            var gproc = Schema.NewProcess(gcase);

            Player.Run(gproc);
        }
    }
}