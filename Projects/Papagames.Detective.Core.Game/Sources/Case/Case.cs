using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Case : Identifiable<int, Case>, IOptions
    {
        public Case(IWorld world, int membersNum, int murderersNum)
        {
            Id = (Identifier) 0;

            World = world;
            MembersNum = membersNum;
            MurderersNum = murderersNum;
            MurderersNumIsOpen = true;
            PrisonerRoleIsOpen = true;
            VictimRoleIsOpen = true;
            EvidencesNumIsOpen = true;
            SelectAnyRespondentOnQuestioning = true;
            AutoQuestioningIsEnabled = true;

            InitMembers();
        }

        public Identifier Id { get; set; }
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

        public int? MurderersOpenNum
        {
            get { return DoGetMurderersOpenNum(); }
        }

        // ===================================================================================== []
        // IOptopns
        public IWorld World { get; private set; }
        public int MurderersNum { get; private set; }
        public int MembersNum { get; private set; }
        public bool PrisonerRoleIsOpen { get; private set; }
        public bool VictimRoleIsOpen { get; private set; }
        public bool MurderersNumIsOpen { get; private set; }
        public bool EvidencesNumIsOpen { get; private set; }
        public bool SelectAnyRespondentOnQuestioning { get; private set; }
        public bool AutoQuestioningIsEnabled { get; private set; }
    }
}