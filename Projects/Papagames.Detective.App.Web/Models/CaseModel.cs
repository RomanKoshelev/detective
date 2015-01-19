using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class CaseModel
    {
        // ===================================================================================== []
        // Publice
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

        // ===================================================================================== []
        // Pivate
        private Case Case { get; set; }
        private IList<MemberModel> DoGetMembers()
        {
            return MakeMemberModelsList(c => c.Members);
        }

        private IList<MemberModel> DoGetMurders()
        {
            return MakeMemberModelsList(c => c.Murderers);
        }

        private IList<MemberModel> DoGetVictims()
        {
            return MakeMemberModelsList(c => c.Victims);
        }

        private List<MemberModel> MakeMemberModelsList(Func<Case, IList<Member>> membersSelector)
        {
            return membersSelector(Case).Select(m => new MemberModel(Id, m.Id)).ToList();
        }
    }
}