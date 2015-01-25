using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Case : Identifiable<int, Case>, IOptions
    {
        public Case(IWorld world, int memberNum, int murdererNum)
        {
            World = world;
            MemberNum = memberNum;
            MurdererNum = murdererNum;

            Id = (Identifier) 0;
            Init();

            PrisonerRoleIsOpen = true;
            VictimRoleIsOpen = true;
            MurdererNumIsOpen = true;
        }

        public Identifier Id { get; set; }
        public int MurdererNum { get; set; }
        public int MemberNum { get; set; }

        public IWorld World { get; set; }
        public IList<Member> Members { get; private set; }

        public Member Detective { get; private set; }

        public string WorldName
        {
            get { return World.Name; }
        }

        public IList<Member> ActiveMembers
        {
            get { return Members.Where(m => m.IsActive).ToList(); }
        }

        public IList<Member> Murderers
        {
            get { return Members.Where(m => m.IsMurderer).ToList(); }
        }

        public IList<Member> Prisoners
        {
            get { return Members.Where(m => m.IsPrisoner).ToList(); }
        }

        public IList<Member> Victims
        {
            get { return Members.Where(m => m.IsVictim).ToList(); }
        }

        public Member FindMember(int number)
        {
            return DoFindMember(number);
        }

        // ===================================================================================== []
        // IOptopns
        public bool PrisonerRoleIsOpen { get; private set; }
        public bool VictimRoleIsOpen { get; private set; }
        public bool MurdererNumIsOpen { get; private set; }
    }
}