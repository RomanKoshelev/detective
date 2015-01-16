using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        public void OnStart()
        {
            if (SilenceMode) return;

            WriteHeader("Game Started\nWelcome to criminal {0} world", _process.Case.World.Name);
            var memberNum = Members.Count;
            var murderNum = Members.Count(m => m.IsMurderer);

            WriteLine("There {0} {1} Murderer{2} within {3} participants", murderNum > 1 ? "are" : "is", murderNum, murderNum > 1 ? "s" : "", memberNum);
            WriteLine("Every night one of the Murderers selects a victim");
            WriteLine("And every night peaceful witnesses can take up to {0} evidence{1}", _process.MaxEvidenceNum, _process.MaxEvidenceNum > 1 ? "s" : "");
        }


        public void OnMorning()
        {
            if (SilenceMode) return;
            
            WriteHeader("Morning");

            var victim = _process.LastVictim;

            WriteLine("{0} is dead", victim.Name);
            WriteLine("{0} was {1}", victim.Name, victim.IsMurderer ? "Murderer" : "Innocent");

            WriteLine();
            PrintEmotions();

            var murderNum = Members.Count(m => m.IsActiveMurderer);
            WriteLine();
            WriteLine("There {0} {1} {2}",
                murderNum > 1 ? "are" : "is",
                murderNum,
                PluralNoun(murderNum, "murderer")
                );
        }

        public void OnQuestioning()
        {
            if (SilenceMode) return;

            WriteHeader("Questioning");
            PrintAnswers();

            ActiveMembers.ForEach(respondent =>
            {
                var subjNum = GetQuestionSubjectForAsking(respondent, ActiveMembers.Where(s=>s!=respondent));
                var subject = Members.First(m => m.Number == subjNum);
                var answer = _process.AskMemberAboutSubject(respondent, subject);
                DoOnAnswerWithAdverb(respondent, subject, answer);
            });
            WriteLine();
            PressEnterToContinue();
        }

        public void OnArrest()
        {
            if (SilenceMode) return;

            WriteHeader("Arrest");

            //WriteLine("{0} was killed last night", LastVictim.Name);

            WriteLine();
            //PrintEmotions(members, history);
            WriteLine();
            //PrintAnswers(members, history);
            WriteLine();

            WriteLine();
    //        WriteLine("{0,2}:{1} is arrested", arrested.Number, arrested.Name);
  //          WriteLine("   {0} was {1}", arrested.Name, arrested.IsMurderer ? "Murderer" : "Innocent");

            WriteLine();
//            PrintEmotions(members, history);
            WriteLine();
            PressEnterToContinue("Press Enter to run next day...");

        }

        public void OnDetectiveWin()
        {
            if (SilenceMode) return;

            WriteHeader("Detective Win");
            WriteLine("*********************");
            WriteLine("*                   *");
            WriteLine("*   You win!  :)    *");
            WriteLine("*                   *");
            WriteLine("*********************");
            WaitAndPrintGameAnalize();
        }

        public void OnMurdererWin()
        {
            if (SilenceMode) return;

            WriteHeader("Murderers Win");
            WriteLine("x x x x x x x x x x");
            WriteLine("x                 x");
            WriteLine("x      Fail       x");
            WriteLine("x                 x");
            WriteLine("x x x x x x x x x x");
            WaitAndPrintGameAnalize();
        }

        public void OnGameEnd()
        {
            WriteHeader("Game End");
        }
        private void OnError()
        {
            WriteLine("[Error]");
        }
    }
}