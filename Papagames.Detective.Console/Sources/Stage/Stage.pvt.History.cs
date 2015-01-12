using System;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core;
using Action = Papagames.Detective.Core.Action;

namespace Papagames.Detective.Console
{
    internal partial class Stage
    {
        private static void PrintHistory(History history)
        {
            if (SilenceMode) return;

            WriteLine("History");

            history.Days.ForEach(d =>
            {
                WriteLine("  Day:{0} ", d);
                WriteLine("    Active: {0}", GetParticipations(history, d));
                history.Records.Where(r => r.Day == d).Where(RecordIsRealAction)
                    .ForEach(r => WriteLine("    {0}", FormatActiveMemberHistoryRecord(r)));
            });
        }

        private static string GetParticipations(History history, int day)
        {
            return history.Records.Where(r => r.Day == day && r.Action == Action.Participation).Select(r => MemberHistoryName(r.Agent)).Aggregate((res, s) => res + ", " + s);
        }

        private static string MemberHistoryName(Member member)
        {
            return member + (member.IsMurderer ? "*" : "");
        }

        private static bool RecordIsRealAction(History.Record r)
        {
            return (r.Action == Action.Murder ||
                    r.Action == Action.Arrest ||
                    r.Action == Action.InnocentEvidence ||
                    r.Action == Action.MurdererEvidence);
        }

        private static string FormatActiveMemberHistoryRecord(History.Record rec)
        {
            return string.Format(rec.Action.VerbalTemplate(), MemberHistoryName(rec.Agent), MemberHistoryName(rec.Subject));
        }
    }
}