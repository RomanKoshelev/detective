using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Common;
using Papagames.Detective.Core;

namespace Papagames.Detective.Presentation.Console
{
    internal partial class Stage : IStage
    {
        public static bool DebugMode { get; set; }
        public static bool AutoMode { get; set; }
        public static bool SilenceMode { get; set; }

        public Stage()
        {
            DebugMode = false;
            AutoMode = false;
        }

        public void OnGameStart(IList<Member> members, int maxEvidencePerNight, string worldName)
        {
            if (SilenceMode) return;

            WriteHeader("Game Started\nWelcome to criminal {0} world", worldName);
            var memberNum = members.Count;
            var murderNum = members.Count(m => m.IsMurderer);

            WriteLine("There {0} {1} Murderer{2} within {3} participants", murderNum > 1 ? "are" : "is", murderNum, murderNum > 1 ? "s" : "", memberNum);
            WriteLine("Every night one of the Murderers selects a victim");
            WriteLine("And every night peaceful witnesses can take up to {0} evidence{1}", maxEvidencePerNight, maxEvidencePerNight > 1 ? "s" : "");
        }

        public void OnMurder(Member murderer, Member victim, IList<Member> members, History history)
        {
            LastVictim = victim;
            if (SilenceMode) return;

            if (DebugMode)
                WriteLine("{0} kills {1}", murderer.Name, victim.Name);
            else
                WriteLine("{0} is dead", victim.Name);
            WriteLine("{0} was {1}", victim.Name, victim.IsMurderer ? "Murderer" : "Innocent");

            WriteLine();
            PrintEmotions(members, history);

            var murderNum = members.Count(m => m.IsActiveMurderer);
            WriteLine();
            WriteLine("There {0} {1} {2}",
                murderNum > 1 ? "are" : "is", 
                murderNum,
                PluralNoun(murderNum,"murderer")
                );
        }

        public void OnWitness(Member witness, Member evidence)
        {
            if (DebugMode)
                WriteLine("{0} knows about {1}", witness.Name, evidence.Name);
        }

        public void OnNightStart()
        {
            WriteHeader("Night");
        }

        public void OnNightEnd()
        {
        }

        public void OnMorning(IList<Member> members, History history)
        {
            if (!DebugMode) return;
            if (SilenceMode) return;

            WriteLine("Game continues");
            WriteHeader("Morning");
            PrintHistory(history);
            WriteLine();
            PrintAllMembers(members, history);
        }

        public void OnGameEnd()
        {
            WriteHeader("Game End");
        }

        public void OnQuestioningStart(IList<Member> members, History history)
        {
            if (SilenceMode) return;

            WriteHeader("Questioning");
            if(DebugMode) 
            {
                PrintAllMembers(members, history);
                WriteLine();
            }
            PrintAnswers(members, history);
            WriteLine();
        }

        public void OnQuestioningEnd(IList<Member> members, History history)
        {
            PressEnterToContinue();
        }
        
        public void OnAnswer(Member respondent, Member subject, Answer answer)
        {
            if (SilenceMode) return;
            DoOnAnswerWitAdverb(respondent, subject, answer);
        }

        public void OnArrestStart(IList<Member> members, History history)
        {
            if (SilenceMode) return;

            WriteHeader("Arrest");

            WriteLine("{0} was killed last night", LastVictim.Name);

            WriteLine();
            PrintEmotions(members, history);
            WriteLine();
            PrintAnswers(members, history);
            WriteLine();
        }

        public Member LastVictim { get; set; }

        public void OnArrestEnd(Member arrested, IList<Member> members, History history)
        {
            if (SilenceMode) return;

            WriteLine();
            WriteLine("{0,2}:{1} is arrested", arrested.Number, arrested.Name);
            WriteLine("   {0} was {1}", arrested.Name, arrested.IsMurderer ? "Murderer" : "Innocent");
            
            WriteLine();
            PrintEmotions(members, history);
            WriteLine();
            PressEnterToContinue("Press Enter to run next day...");
        }

        public void OnDetectiveWin(IList<Member> members, History history)
        {
            if (SilenceMode) return;

            WriteHeader("Detective Win");
            WriteLine("*********************");
            WriteLine("*                   *");
            WriteLine("*   You win!  :)    *");
            WriteLine("*                   *");
            WriteLine("*********************");
            WaitAndPrintGameAnalize(members, history);
        }

        public void OnMurdererWin(IList<Member> members, History history)
        {
            if (SilenceMode) return;

            WriteHeader("Murderers Win");
            WriteLine("x x x x x x x x x x");
            WriteLine("x                 x");
            WriteLine("x      Fail       x");
            WriteLine("x                 x");
            WriteLine("x x x x x x x x x x");
            WaitAndPrintGameAnalize(members, history);
        }
        
        public void OnNextDay(int currentDay)
        {
            if (SilenceMode) return;
            if (DebugMode)
                WriteLine("Game continues");
            WriteHeader("Day {0} started", currentDay);
        }

        public void OnCheck()
        {
            if (SilenceMode) return;
            if (DebugMode)
                WriteHeader("Checking");
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
    }
}