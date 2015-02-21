using System.Collections.Generic;
using System.Linq;

namespace Crimenuts.Core.Game
{
    public partial class Member
    {
        public bool IsUninformed
        {
            get { return !IsWitness && !IsMurderer; }
        }

        public int ActualMurderersCount { get; set; }
        public int ActualMembersCount { get; set; }

        public bool IsWitness
        {
            get { return IsWitnessInnocent || IsWitnessMurderer; }
        }

        public bool IsWitnessInnocent
        {
            get { return _innocents.Any(m => m.IsActive); }
        }

        public bool IsWitnessMurderer
        {
            get { return _murderers.Any(m => m.IsActive); }
        }

        public int ActiveMurderEvidenceCount
        {
            get { return _murderers.Count(m => m.IsActive); }
        }
        public bool WasWitness
        {
            get { return WasWitnessMurderer || WasWitnessInnocent; }
        }
        public bool WasWitnessMurderer
        {
            get { return _murderers.Any(); }
        }

        public bool WasWitnessInnocent
        {
            get { return _innocents.Any(); }
        }

        public bool WasUninformed
        {
            get { return !WasWitness && !IsMurderer; }
        }

        public void RememberMurderer(Member murderer)
        {
            DoRememberMurderer(murderer);
        }

        public void RememberInnocent(Member innocent)
        {
            DoRememberInnocent(innocent);
        }

        public Answer Ask(Member subj)
        {
            return DoAsk(subj);
        }

        public Emotion ExpressEmotionOnMurderOrArrest(Member subj)
        {
            return DoExpressEmotionOnMurderOrArrest(subj);
        }

        public Emotion ExpressEmotionOnRelationTo(Member subj)
        {
            return DoExpressEmotionOnRelationTo(subj);
        }

        public Member SelectVictim(IList<Member> victims)
        {
            return DoSelectVictim(victims);
        }

        public Member SelectEvidence(IList<Member> members)
        {
            return DoSelectEvidence(members);
        }

        public bool KnowsAsMurderer(Member subj)
        {
            return _murderers.Exists(m => m == subj);
        }

        public bool KnowsAsInnocent(Member subj)
        {
            return _innocents.Exists(m => m == subj);
        }

        public void UpdateKnownCounts(int membersCount, int murderersCount)
        {
            ActualMurderersCount = murderersCount;
            ActualMembersCount = membersCount;
        }
    }
}