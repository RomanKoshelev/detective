using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        private IList<Func<Member, int>> _evidenceFactors;

        private Member DoSelectEvidence(IEnumerable<Member> members)
        {
            return members.Where(m=>m!=this && !HasEvidenceOn(m)).OrderBy(EvidenceFactor).LastOrDefault();
        }

        private int EvidenceFactor(Member subj)
        {
            Trace.Assert(subj != this);
            Trace.Assert(subj.IsActive);

            var factorValue = CalcEvidenceFactor(subj);

//            Console.WriteLine("{0,8}", factorValue);

            return factorValue;
        }

        private void InitEvidenceDecisionModule()
        {
            InitInterestFactors();

            for (var i = 0; i < Person.Profile.GetEvidenceRulesNum(); i++)
            {
                AddEvidenceFactor(GetEvidenceRulePredicate(i+1), i+1);
            }

        }

        private void InitInterestFactors()
        {
            _evidenceFactors = new List<Func<Member, int>>();
        }

        private EvidenceRule EvidenceRule
        {
            get { return Person.Profile.EvidenceRule; }
        }

        private Predicate<Member> GetEvidenceRulePredicate(int order)
        {
            switch (EvidenceRule.GetEvidenceSign(order))
            {
                case EvidenceSign.IsHated:
                    return Hates;
                case EvidenceSign.IsLoved:
                    return Loves;
                case EvidenceSign.IsIgnored:
                    return Ignores;

                case EvidenceSign.LovesMe:
                    return LovesMe;
                case EvidenceSign.HatesMe:
                    return HatesMe;
                case EvidenceSign.IgnoresMe:
                    return IgnoresMe;
            }
            throw new Exception("Unknown Evidence sign");
        }

        private bool HatesMe(Member member)
        {
            return member.Hates(this);
        }
        private bool LovesMe(Member member)
        {
            return member.Loves(this);
        }
        private bool IgnoresMe(Member member)
        {
            return member.Ignores(this);
        }

        private void AddEvidenceFactor(Predicate<Member> predicat, int value)
        {
            _evidenceFactors.Add(m => predicat(m) ? value : 0);
        }
        
        private int CalcEvidenceFactor(Member subj)
        {
            return _evidenceFactors.Select(factor => factor(subj)).Max();
        }
    }
}