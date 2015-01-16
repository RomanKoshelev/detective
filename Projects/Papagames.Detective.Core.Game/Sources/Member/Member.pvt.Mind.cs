using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Common;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        private readonly List<Member> _murderers = new List<Member>();
        private readonly List<Member> _innocents = new List<Member>();

        private bool HasEvidenceOn(Member subj)
        {
            return KnowIsInnocent(subj) || KnowIsMurderer(subj);
        }

        private bool ThinkIsMurderer(Member subj)
        {
            if (_murderers.Exists(m => m == subj))
                return true;

            var allInnocentsAreKnown = (1 + _innocents.Count(m => m.IsActive)) ==
                                       (ActualMembersCount - ActualMurderersCount);

            if (allInnocentsAreKnown && !KnowIsInnocent(subj))
                return true;

            return false;
        }

        private bool ThinkIsInnocent(Member subj)
        {
            if (_innocents.Exists(m => m == subj))
                return true;

            var allMurderersAreKnown = _murderers.Count(m => m.IsActive) == ActualMurderersCount;

            if (allMurderersAreKnown && !KnowIsMurderer(subj))
                return true;

            return false;
        }

        private void DoRememberMurderer(Member murderer)
        {
            if (_murderers.NotExists(m => m == murderer))
                _murderers.Add(murderer);
        }

        private void DoRememberInnocent(Member innocent)
        {
            if (_innocents.NotExists(m => m == innocent))
                _innocents.Add(innocent);
        }

        private void InitDecisionModules()
        {
            if (IsDetective) return;
            InitMurderDecisionModule();
            InitEvidenceDecisionModule();
        }
    }
}