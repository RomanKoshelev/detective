// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Player.cs
// Roman, 2015-03-29 12:55 AM

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        public bool AutoMode { get; set; }
        public bool SilenceMode { get; set; }

        public Player()
        {
            SilenceMode = false;
            AutoMode = false;
            InitStateHandlers();
        }

        private int GetSuspectNumberForArrest( IList< Member > members )
        {
            var values = members.Select( m => m.Number ).ToList();
            const string strValues = "";
            var memberNum = members.Count( m => m.IsActive );
            var murderNum = members.Count( m => m.IsActiveMurderer );
            WriteLine( "You have {0} {1} and {2} suspects",
                murderNum,
                "murderer".Plural( murderNum ),
                memberNum
                );
            WriteLine();

            var prompt = string.Format( "{0}{1}", "Arrest", strValues );
            return PromptInt( prompt, values, values.RandomElement() );
        }

        public void Run( Process process )
        {
            DoRun( process );
        }
    }
}