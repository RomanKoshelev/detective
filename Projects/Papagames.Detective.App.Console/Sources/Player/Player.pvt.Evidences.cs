using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {

        private void PrintEvidences()
        {
            if (SilenceMode) return;

            WriteLine("Knowleges");

            Members.Where(m=>m.IsInnocent).ForEach(m =>
            {
                WriteLine("  {0}", m.Name);
                if (m.WasWitnessMurderer) PrintEvidenceSubjects("Murderers: ", Members, m.KnowsAsMurderer);
                if (m.WasWitnessInnocent) PrintEvidenceSubjects("Innocents: ", Members, m.KnowsAsInnocent);
                if (m.WasUninformed) WriteLine("    Has no information");
            });
        }

        private void PrintEvidenceSubjects(string text, IEnumerable<Member> subjects, Func<Member, bool> predicate)
        {
            WriteLine("    {0}{1}", text, subjects.Where(predicate).Select(s => s.Name).Aggregate((res, name) => res + ", " + name));
        }
    }
}