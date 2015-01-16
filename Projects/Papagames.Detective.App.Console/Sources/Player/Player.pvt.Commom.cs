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
/*
            PrintRelations(members);

            WriteLine();
            PrintEvidences(members);
            WriteLine();
            PrintEmotions(members, history, printAll: true);
            //WriteLine();
            //PrintAllMembers(members, history, printAll: true);
            WriteLine();
            PrintAnswers(members, history, isGameOver: true);
            WriteLine();
            PrintHistory(history);
*/
        }
        private static string NumberOrFullState(Member m)
        {
            return m.IsActive
                ? string.Format("{0,2}:", m.Number)
                : (m.IsPrisoner ? "#" : "x") + (m.IsInnocent ? "I " : m.IsMurderer ? "M " : "ERROR");
        }

        private IList<Member> Members {get { return _process.Members; }}
        public History History { get { return _process.History; } }
        public IList<Member> ActiveMembers { get { return _process.ActiveMembers; } }
    }
}