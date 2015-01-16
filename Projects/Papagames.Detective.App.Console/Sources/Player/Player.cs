using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Common;
using Papagames.Detective.Core.Game;

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

        public int GetSuspectNumberForArrest(IList<Member> members)
        {
            var values = members.Select(m => m.Number).ToList();
            const string strValues = "";
            var memberNum = members.Count(m => m.IsActive);
            var murderNum = members.Count(m => m.IsActiveMurderer);
            WriteLine("You have {0} {1} and {2} suspects",
                murderNum,
                PluralNoun(murderNum, "murderer"),
                memberNum
            );
            WriteLine();
            
            var prompt = string.Format("{0}{1}", "Arrest", strValues);
            return PromptInt(prompt, values, values.RandomElement());
        }

        public int GetQuestionSubjectForAsking(Member respondent, IList<Member> subjects)
        {
            var values = subjects.Select(m => m.Number).ToList();
            const string strValues = "";
            var defValue = values.RandomElement();
            return PromptInt(string.Format("Ask{0}{1}", respondent.ShortInfoName(12), strValues), values, defValue);
        }

        public void Run(Process process)
        {
            DoRun(process);
        }
    }
}