using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Public
        public MemberModel(Member member)
        {
            Member = member;
        }
        public MemberModel(MemberModel member)
            : this(member.Member)
        {
        }

        public string Name
        {
            get { return Member.Name; }
        }

        public int Number
        {
            get { return Member.Number; }
        }

        public bool IsVictim
        {
            get { return Member.IsVictim; }
        }
        public bool IsOpenMurderer
        {
            get { return Member.IsOpenMurderer; }
        }
        public bool IsOpenInnocent
        {
            get { return Member.IsOpenInnocent; }
        }

        public string MemberHistoryName
        {
            get { return (Member.IsMurderer? "*":"") + Name; }
        }

        public string NameRole
        {
            get { return DoGetNameRole(); }
        }
        public Role Role
        {
            get { return Member.OpenRole; }
        }

        public override string ToString()
        {
            return Name;
        }

        public int LastActivityaDay
        {
            get { return Member.LastActivityDay; }
        }

        public bool Loves(MemberModel subject)
        {
            return Member.Loves(subject.Member);
        }
        public bool Hates(MemberModel subject)
        {
            return Member.Hates(subject.Member);
        }

        public Emotion ExpressEmotionOnRelationTo(MemberModel subject)
        {
            return Member.ExpressEmotionOnRelationTo(subject.Member);
        }

        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }

        private string DoGetNameRole()
        {
            if (Role == Role.Unknown)
                return Name;
            return string.Format("{0} [{1}]", Name, Role);
        }
    }
}