using System.Collections.Generic;
using Papagames.Detective.Core;

namespace Papagames.Detective.Console
{
    internal partial class Stage
    {
        private static void WaitAndPrintGameAnalize(IList<Member> members, History history)
        {
            WriteLine();
            PressEnterToContinue();
            WriteHeader("Discovering");
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
        }
        private static string NumberOrFullState(Member m)
        {
            return m.IsActive
                ? string.Format("{0,2}:", m.Number)
                : (m.IsPrisoner ? "#" : "x") + (m.IsInnocent ? "I " : m.IsMurderer ? "M " : "ERROR");
        }
    }
}