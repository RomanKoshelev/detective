using System.Collections.Generic;
using System.Linq;

namespace Papagames.Detective.Core
{
    public partial class Member
    {
        public bool Love(Member subj)
        {
            return Person.Love(subj.Person);
        }

        public bool Hate(Member subj)
        {
            return Person.Hate(subj.Person);
        }

        public bool Ignore(Member subj)
        {
            return Person.Ignore(subj.Person);
        }

        public bool LoveOrHate(Member subj)
        {
            return subj != this && (Love(subj) || Hate(subj));
        }

        public bool LoveAny(IList<Member> subjects)
        {
            return subjects.Any(Love);
        }

        public bool LoveOrHateAny(IList<Member> members)
        {
            return LoveAny(members) || HateAny(members);
        }

        public bool HateAny(IList<Member> subjects)
        {
            return subjects.Any(Hate);
        }

        public bool IgnoreAny(IList<Member> subjects)
        {
            return subjects.Any(Ignore);
        }
    }
}