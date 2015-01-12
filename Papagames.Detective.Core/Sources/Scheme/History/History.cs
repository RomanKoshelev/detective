using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using MoreLinq;

namespace Papagames.Detective.Core
{
    public partial class History
    {
        #region Properties

        // ===================================================================================== []
        public List<Record> Records = new List<Record>();

        public int LastDay
        {
            get { return Records.MaxBy(i => i.Day).Day; }
        }

        public int FirstDay
        {
            get { return 1; }
        }

        public IEnumerable<int> Days
        {
            get { return Enumerable.Range(FirstDay, LastDay - FirstDay + 1); }
        }

        // ===================================================================================== []

        #endregion

        #region Methods

        // ===================================================================================== []
        public void StoreParticipation(int day, Member member)
        {
            Records.Add(new Record(day, Action.Participation, member));
        }

        public void StoreMurderEvidence(int day, Member witness, Member murderer)
        {
            if (
                Records.NotExists(
                    r =>
                        r.Action == Action.MurdererEvidence && r.Day == day && r.Agent == witness &&
                        r.Subject == murderer))
                Records.Add(new Record(day, Action.MurdererEvidence, witness, murderer));
        }

        public void StoreInnocentEvidence(int day, Member witness, Member innocent)
        {
            if (
                Records.NotExists(
                    r =>
                        r.Action == Action.InnocentEvidence && r.Day == day && r.Agent == witness &&
                        r.Subject == innocent))
                Records.Add(new Record(day, Action.InnocentEvidence, witness, innocent));
        }

        public void StoreMurder(int day, Member murderer, Member victim)
        {
            Records.Add(new Record(day, Action.Murder, murderer, victim));
        }

        public void StoreAnswer(int day, Member respondent, Member subject, Answer answer)
        {
            Records.Add(new Record(day, Action.Answer, respondent, subject, answer));
        }

        public void StoreArrest(int day, Member detective, Member suspect)
        {
            Records.Add(new Record(day, Action.Arrest, detective, suspect));
        }

        public void StoreEmotionOnMurder(int day, Member member, Member victim, Emotion emotion)
        {
            Trace.Assert(member.IsActive);
            Records.Add(new Record(day, Action.EmotionOnMurder, member, victim, emotion));
        }
        public void StoreEmotionOnArrest(int day, Member member, Member victim, Emotion emotion)
        {
            Trace.Assert(member.IsActive);
            Records.Add(new Record(day, Action.EmotionOnArrest, member, victim, emotion));
        }

        // ===================================================================================== []

        #endregion

    }
}