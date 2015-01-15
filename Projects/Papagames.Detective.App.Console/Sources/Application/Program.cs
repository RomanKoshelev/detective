using System;
using Papagames.Detective.Core;

namespace Papagames.Detective.Presentation.Console
{
    internal partial class Program
    {
        private static void Main()
        {
            try
            {
                var stage = new Stage();
                var pack = new Pack();
                var game = new Game(stage, pack.SimpsonsWorld);
                Run(game);
            }
            catch (Exception e)
            {
                PrintException(e);                
            }
        }

        private static void Run(Game game)
        {
            Stage.SilenceMode = false;
            Stage.AutoMode = true;
            // todo: https://rk-dev.atlassian.net/browse/DET-12
            RunGame(game,8,3);
        }
    }
}