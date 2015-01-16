using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {

        private void PrintEvidences(IList<Member> members)
        {
            if (SilenceMode) return;

            WriteLine("Knowleges");

            members.Where(m=>m.IsInnocent).ForEach(m =>
            {
                WriteLine("  {0}", m.Name);
                if (m.WasWitnessMurderer) PrintEvidenceSubjects("Murderers: ", members, m.KnowIsMurderer);
                if (m.WasWitnessInnocent) PrintEvidenceSubjects("Innocents: ", members, m.KnowIsInnocent);
                if (m.WasUninformed) WriteLine("    Has no information");
            });
        }

        private void PrintEvidenceSubjects(string text, IEnumerable<Member> subjects, Func<Member, bool> predicate)
        {
            WriteLine("    {0}{1}", text, subjects.Where(predicate).Select(s => s.Name).Aggregate((res, name) => res + ", " + name));
        }
    }
}