using System.Collections.Generic;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private void WaitAndPrintGameAnalize()
        {
            WriteLine();
            PressEnterToContinue();
            WriteHeader("Discovering");

            PrintRelations();

            WriteLine();
            PrintEvidences();
            WriteLine();
            PrintEmotions(printAll: true);
            WriteLine();
            PrintAllMembers(printAll: true);
            WriteLine();
            PrintAnswers(isGameOver: true);
            WriteLine();
            PrintHistory();
        }
        private static string NumberOrFullState(Member m)
        {
            return m.IsActive
                ? string.Format("{0,2}:", m.Id)
                : (m.IsPrisoner ? "#" : "x") + (m.IsInnocent ? "I " : m.IsMurderer ? "M " : "ERROR");
        }

        private IList<Member> Members {get { return _process.Members; }}
        public History History { get { return _process.History; } }
        public IList<Member> ActiveMembers { get { return _process.ActiveMembers; } }
        private Member LastVictim
        {
            get { return _process.LastVictim; }
        }
        public Member LastArrested
        {
            get { return _process.LastArrested; }
        }
        private State State
        {
            get { return _process.State; }
        }

        public int CurrentDay
        {
            get { return _process.CurrentDay; }
        }
    }
}