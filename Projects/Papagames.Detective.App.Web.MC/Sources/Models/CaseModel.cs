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
        public CaseModel(Case.Identifier id)
        {
            Case = Schema.FindCase(id);
        }

        public Case.Identifier Id
        {
            get { return Case.Id; }
        }

        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public IList<MemberModel> Members
        {
            get { return MakeMemberModelList(c => c.Members); }
        }

        public IList<MemberModel> ActiveMembers
        {
            get { return MakeMemberModelList(c => c.ActiveMembers); }
        }

        public IList<MemberModel> Murderers
        {
            get { return MakeMemberModelList(c => c.Murderers); }
        }

        public IList<MemberModel> Victims
        {
            get { return MakeMemberModelList(c => c.Victims); }
        }

        public string ShortInfo
        {
            get { return DoGetShortInfo(); }
        }

        // ===================================================================================== []
        // Pivate
        private Case Case { get; set; }

        private List<MemberModel> MakeMemberModelList(Func<Case, IList<Member>> membersSelector)
        {
            return membersSelector(Case).Select(m => new MemberModel(Id, m.Number)).ToList();
        }

        private string DoGetShortInfo()
        {
            return string.Format("Case {0}: {1} {2}-{3}-{4} {5}", Id, WorldName, ActiveMembers.Count, Murderers.Count, Victims.Count,
                Victims.AggregateBy(v => v.Name));
        }
    }
}