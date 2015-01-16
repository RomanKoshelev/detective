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
                PlayGame();
            }
            catch (Exception e)
            {
                PrintException(e);                
            }
        }

        private static void PlayGame()
        {
            Player.SilenceMode = false;
            Player.AutoMode = true;

            var gcase = Scheme.NewCase(Scheme.WorldId.Simpsons, 8, 3);
            var gproc = Scheme.NewProcess(gcase);

            Player.Run(gproc);
        }
    }
}