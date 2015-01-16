﻿using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private void PrintRelations(IList<Member> members)
        {
            if (SilenceMode) return;

            WriteLine("Relations");

            members.ForEach(m =>
            {
                WriteLine("  {0}",m.Name);
                if (m.LoveAny(members))   PrintRelationSubjects("Loves: ", m, members, m.Love);
                if (m.HateAny(members))   PrintRelationSubjects("Hates: ", m, members, m.Hate);
                if (!m.LoveOrHateAny(members)) WriteLine("    Ignores all");
            });
        }

        private void PrintRelationSubjects(string text, Member member, IEnumerable<Member> subjects, Func<Member, bool> predicate)
        {
            WriteLine("    {0}{1}", text, subjects.Where(predicate).Select(s => s.Name).Aggregate((res, name) => res + ", " + name));
        }
    }
}