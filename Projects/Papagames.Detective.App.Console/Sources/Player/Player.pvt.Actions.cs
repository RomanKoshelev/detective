using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private void Start()
        {
            if (SilenceMode) return;

            WriteHeader("Game Started\nWelcome to criminal {0} world", _process.Case.World.Name);
            var memberNum = Members.Count;
            var murderNum = Members.Count(m => m.IsMurderer);

            WriteLine("There {0} {1} Murderer{2} within {3} participants", murderNum > 1 ? "are" : "is", murderNum, murderNum > 1 ? "s" : "", memberNum);
            WriteLine("Every night one of the Murderers selects a victim");
            WriteLine("And every night peaceful witnesses can take up to {0} evidence{1}", _process.MaxEvidenceNum, _process.MaxEvidenceNum > 1 ? "s" : "");
        }

        private void Morning()
        {
            if (SilenceMode) return;
            
            WriteHeader("Day {0} Morning", CurrentDay);

            var victim = LastVictim;

            WriteLine("{0} is dead", victim.Name);
            WriteLine("{0} was {1}", victim.Name, victim.IsMurderer ? "Murderer" : "Innocent");

            WriteLine();
            PrintEmotions();

            var murderNum = Members.Count(m => m.IsActiveMurderer);
            WriteLine();
            WriteLine("There {0} {1} {2}",
                murderNum > 1 ? "are" : "is",
                murderNum,
                "murderer".Plural(murderNum)
                );
        }

        private void Questioning()
        {
            if (SilenceMode) return;

            WriteHeader("Questioning");
            PrintAnswers();
            WriteLine();

            ActiveMembers.ForEach(respondent =>
            {
                var subjNum = GetQuestionSubjectForAsking(respondent, ActiveMembers.Where(s=>s!=respondent));
                var subject = Members.First(m => m.Id == subjNum);
                var answer = _process.Ask(respondent, subject);
                PrintAnswerWithAdverb(respondent, subject, answer);
            });
            
            PressEnterToContinue();
        }

        private void Arrest()
        {
            if (SilenceMode) return;

            WriteHeader("Arrest");
            WriteLine("{0} was killed last night", LastVictim.Name);
            WriteLine();
            PrintEmotions();
            WriteLine();
            PrintAnswers();
            WriteLine();

            var suspNum = GetSuspectNumberForArrest(ActiveMembers);
            var suspect = Members.First(m => m.Id == suspNum);
            _process.Arrest(suspect);

            WriteLine();
            WriteLine("{0,2}:{1} is arrested", LastArrested.Id, LastArrested.Name);
            WriteLine("   {0} was {1}", LastArrested.Name, LastArrested.IsMurderer ? "Murderer" : "Innocent");

            WriteLine();
            PrintEmotions();
            WriteLine();
            PressEnterToContinue("Press Enter to run next day...");
        }

        private void DetectiveWin()
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

        private void MurdererWin()
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

        private void End()
        {
            WriteHeader("Game End");
        }
        private void Error()
        {
            WriteLine("[Error]");
        }
    }
}