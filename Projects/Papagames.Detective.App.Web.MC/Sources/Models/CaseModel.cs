using System;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Web.Models
{
    public class CaseModel
    {
        // ===================================================================================== []
        // Public
        public int Id
        {
            get { return Case.Id; }
        }

        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public IList<MemberModel> Members
        {
            get { return DoGetMembers(); }
        }

        public IList<MemberModel> ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList<MemberModel> Murders
        {
            get { return DoGetMurders(); }
        }

        public IList<MemberModel> Victims
        {
            get { return DoGetVictims(); }
        }

        public int MemberNum
        {
            get { return Case.MemberNum; }
        }

        public int ActiveMemberNum
        {
            get { return Case.ActiveMemberNum; }
        }

        public int MurdererNum
        {
            get { return Case.MurdererNum; }
        }

        public int VictimNum
        {
            get { return Case.VictimNum; }
        }

        public CaseModel(int id)
        {
            Case = Schema.FindCase(id);
        }

        public string ShortInfo
        {
            get { return DoGetShortInfo(); }
        }
        
        // ===================================================================================== []
        // Pivate
        private Case Case { get; set; }

        private IList<MemberModel> DoGetMembers()
        {
            return MakeMemberModelList(c => c.Members);
        }

        private IList<MemberModel> DoGetActiveMembers()
        {
            return MakeMemberModelList(c => c.ActiveMembers);
        }

        private IList<MemberModel> DoGetMurders()
        {
            return MakeMemberModelList(c => c.Murderers);
        }

        private IList<MemberModel> DoGetVictims()
        {
            return MakeMemberModelList(c => c.Victims);
        }

        private List<MemberModel> MakeMemberModelList(Func<Case, IList<Member>> membersSelector)
        {
            return membersSelector(Case).Select(m => new MemberModel(Id, m.Id)).ToList();
        }

        private string DoGetShortInfo()
        {
            return string.Format("#{0} {1} {2}/{3} {4}", Id, WorldName, MemberNum, MurdererNum, Victims.AggregateBy(v=>v.Name));
        }
    }
}

