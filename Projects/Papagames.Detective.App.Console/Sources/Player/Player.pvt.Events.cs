using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Common;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        public void OnGameStart()
        {
            if (SilenceMode) return;

            WriteHeader("Process Started\nWelcome to criminal {0} world", _process.Case.World.Name);
           // var memberNum = members.Count;
           // var murderNum = members.Count(m => m.IsMurderer);

            //WriteLine("There {0} {1} Murderer{2} within {3} participants", murderNum > 1 ? "are" : "is", murderNum, murderNum > 1 ? "s" : "", memberNum);
            //WriteLine("Every night one of the Murderers selects a victim");
            //WriteLine("And every night peaceful witnesses can take up to {0} evidence{1}", maxEvidencePerNight, maxEvidencePerNight > 1 ? "s" : "");
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

            WriteLine("Process continues");
            WriteHeader("Morning");
            PrintHistory(history);
            WriteLine();
            PrintAllMembers(members, history);
        }

        public void OnGameEnd()
        {
            WriteHeader("Process End");
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

        private Member LastVictim { get; set; }

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
                WriteLine("Process continues");
            WriteHeader("Day {0} started", currentDay);
        }

        public void OnCheck()
        {
            if (SilenceMode) return;
            if (DebugMode)
                WriteHeader("Checking");
        }
    }
}