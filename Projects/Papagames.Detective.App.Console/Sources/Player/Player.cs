using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Console
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

        private int GetSuspectNumberForArrest(IList<Member> members)
        {
            var values = members.Select(m => m.Id).ToList();
            const string strValues = "";
            var memberNum = members.Count(m => m.IsActive);
            var murderNum = members.Count(m => m.IsActiveMurderer);
            WriteLine("You have {0} {1} and {2} suspects",
                murderNum,
                "murderer".Plural(murderNum),
                memberNum
            );
            WriteLine();
            
            var prompt = string.Format("{0}{1}", "Arrest", strValues);
            return PromptInt(prompt, values, values.RandomElement());
        }

        public void Run(Process process)
        {
            DoRun(process);
        }
    }
}