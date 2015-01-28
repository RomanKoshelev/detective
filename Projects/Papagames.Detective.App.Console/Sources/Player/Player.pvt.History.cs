using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;
using Action = Papagames.Detective.Core.Game.Action;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private void PrintHistory()
        {
            if (SilenceMode) return;

            WriteLine("History");

            History.Days.ForEach(d =>
            {
                WriteLine("  Day:{0} ", d);
                WriteLine("    Active: {0}", GetParticipations(d));
                History.Records.Where(r => r.Day == d).Where(RecordIsRealAction)
                    .ForEach(r => WriteLine("    {0}", FormatActiveMemberHistoryRecord(r)));
            });
        }

        private string GetParticipations(int day)
        {
            return History.Records.Where(r => r.Day == day && r.Action == Action.Participation).Select(r => MemberHistoryName(r.Agent)).Aggregate((res, s) => res + ", " + s);
        }

        private static string MemberHistoryName(Member member)
        {
            return member + (member.IsMurderer ? "*" : "");
        }

        private static bool RecordIsRealAction(History.Record r)
        {
            return r.Action.IsRealAction();
        }

        private static string FormatActiveMemberHistoryRecord(History.Record rec)
        {
            return string.Format(rec.Action.VerbalTemplate(), MemberHistoryName(rec.Agent), MemberHistoryName(rec.Subject));
        }
    }
}