using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core;

namespace Papagames.Detective.Console
{
    internal partial class Stage
    {
        private static void PrintAllMembers(IList<Member> members, History history, bool printAll = false)
        {
            if (SilenceMode) return;

            PrintActiveMembers(members, history, printAll);
            WriteLine();
            PrintInactiveMembers(members, history, printAll);
        }

        private static void PrintActiveMembers(IList<Member> members, History history, bool showAll = false)
        {
            if (SilenceMode) return;

            var murdersCount = members.Count(m => m.IsActiveMurderer);
            WriteLine("Active Members ({0} {1})", murdersCount, PluralNoun(murdersCount, "murder"));
            PrintMembers(m => m.IsActive, members, history, DebugMode || showAll);
        }

        private static string PluralNoun(int num, string noun)
        {
            if (num == 1) return noun;
            if (noun[noun.Length - 1] == 'y')
            {
                return noun.Substring(0, noun.Length - 1) + "ies";
            }
            return noun + "s";
        }

        private static void PrintInactiveMembers(IList<Member> members, History history, bool showAll = false)
        {
            WriteLine("Inactive Members");
            PrintMembers(m => !m.IsActive, members, history, DebugMode || showAll);
        }

        private static void PrintMembers(Func<Member, bool> predicate, IList<Member> members, History history,
            bool showAll)
        {
            if (SilenceMode) return;
            members.Where(predicate)
                .ForEach(
                    m =>
                        WriteLine("  {0}{1,-10} {2,-7}{3,-48} {4}",
                            showAll
                                ? (MemberStatus(m) + "  ")
                                : MemberOpenStatus(m), m.Name, m.Person.Profile.Type,
                            MemberRelationships(m, members), showAll ? BuildMemberHistory(m, history) : ""));
        }

        private static string MemberRelationships(Member member, IList<Member> members)
        {
            return
                AggregateRelationshipNames(members, m => member.Person.Love(m.Person), "+") +
                AggregateRelationshipNames(members, m => member.Person.Ignore(m.Person), " ") +
                AggregateRelationshipNames(members, m => member.Person.Hate(m.Person), "-");
        }

        private static string AggregateRelationshipNames(IEnumerable<Member> members, Func<Member, bool> predicate,
            string sign)
        {
            return members.Where(predicate)
                .Select(m => string.Format("{2} {1,-4} {0}", sign, m.ShortName(4), m.IsVictim ? "x" : " "))
                .Aggregate("", (res, next) => string.Format("{0} {1,-9}", res, next));
        }

        // ReSharper disable once UnusedMember.Local
        private static string MemberInactiveSign(Member member)
        {
            return member.IsActive ? " " : member.IsPrisoner ? "#" : "x";
        }

        private static string MemberStatus(Member m)
        {
            var role = m.IsMurderer ? "MM" : m.IsWitnessMurderer ? "Wm" : m.IsWitnessInnocent ? "Wa" : "I ";
            var state = m.IsMurderer && m.IsActive
                ? "*"
                : m.IsWitness && m.IsActive ? "+" : m.IsPrisoner ? "#" : m.IsVictim ? "x" : " ";

            return role + " " + state;
        }

        private static string MemberOpenStatus(Member m)
        {
            var role = m.IsActive ? "" : m.IsMurderer ? "M" : "I";
            var state = m.IsActive
                ? string.Format("{0,-3}", m.Number)
                : m.IsPrisoner ? "# " : m.IsVictim ? "x " : "ERROR ";
            return role + state;
        }

        private static string BuildMemberHistory(Member member, History history)
        {
            if (history == null) return "";

            var log = "";
            foreach (
                var rec in
                    history.Records.Where(rec => rec.Agent == member && RecordIsRealAction(rec)))
            {
                log += string.Format("d{0}:", rec.Day);
                log += FormatActiveMemberHistoryRecord(rec);
            }
            return log;
        }
    }
}