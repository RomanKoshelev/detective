using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Public
        public MemberModel(Member member)
        {
            Member = member;
        }

        public string Name
        {
            get { return Member.Name; }
        }

        public int Number
        {
            get { return Member.Number; }
        }

        public Role Role
        {
            get { return Member.OpenRole; }
        }

        public string NameRole {
            get { return DoGetNameRole(); }
        }

        public override string ToString()
        {
            return Name;
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