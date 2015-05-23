// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Program.cs
// Roman, 2015-03-29 12:55 AM

using System;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Schema;

namespace Crimenuts.App.Console
{
    internal partial class Program
    {
        private static readonly Player Player = new Player();

        private static void Main()
        {
            try {
                PlayGame( Schema.WorldId.Simpsons, 8, 3, autoMode : false );
            }
            catch( Exception e ) {
                PrintException( e );
            }
        }

        private static void PlayGame( Schema.WorldId worldId, int memberNum, int murderNum, bool autoMode = false )
        {
            Player.SilenceMode = false;
            Player.AutoMode = autoMode;

            var gcase = Schema.NewCase( worldId, memberNum, murderNum );
            var gproc = Schema.NewProcess( gcase );

            Player.Run( gproc );
        }
    }
}