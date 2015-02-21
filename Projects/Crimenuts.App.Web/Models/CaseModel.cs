using System;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Utils;

namespace Crimenuts.App.Web.Models
{
    public class CaseModel
    {
        // ===================================================================================== []
        // Public
        public CaseModel(Identifiable<int, Case>.Identifier id)
        {
            Case = Schema.FindCase(id);
        }

        public Identifiable<int, Case>.Identifier Id
        {
            get { return Case.Id; }
        }

        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public int? MurderersOpenNum
        {
            get { return Case.MurderersOpenNum; }
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

        public IList<MemberModel> Prisoners
        {
            get { return MakeMemberModelList(c => c.Prisoners); }
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
            return membersSelector(Case).Select(m => new MemberModel(m)).ToList();
        }

        private string DoGetShortInfo()
        {
            return string.Format("Case {0}: {1} {2}/{4}-{3} {5}", 
                Id, 
                WorldName, 
                ActiveMembers.Count, 
                Victims.Count,
                "?".IfNull(MurderersOpenNum),
                Victims.FoldToStringBy(v => v.Name));
        }
    }
}