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
                PlayGame(Scheme.WorldId.Simpsons, 8, 3, autoMode: false);
            }
            catch (Exception e)
            {
                PrintException(e);                
            }
        }

        private static void PlayGame(Scheme.WorldId worldId, int memberNum, int murderNum, bool autoMode = false)
        {
            Player.SilenceMode = false;
            Player.AutoMode = autoMode;

            var gcase = Scheme.NewCase(worldId, memberNum, murderNum);
            var gproc = Scheme.NewProcess(gcase);

            Player.Run(gproc);
        }
    }
}