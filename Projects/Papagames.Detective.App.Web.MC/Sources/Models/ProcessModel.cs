using System;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Web.Models
{
    public class ProcessModel
    {
        // ===================================================================================== []
        // Public
        public ProcessModel(int id)
        {
            Process = Schema.FindProcess(id);
        }
        public int Id { get { return Process.Id; } }

        public string ShortInfo
        {
            get { return DoGetShortInfo(); }
        }
        public string WorldName
        {
            get { return Process.WorldName; }
        }

        public IList<MemberModel> ActiveMembers
        {
            get { return MakeMemberModelList(p => p.ActiveMembers); }
        }
        public IList<MemberModel> ActiveMurderers
        {
            get { return MakeMemberModelList(p => p.ActiveMurderers); }
        }
        public IList<MemberModel> Victims
        {
            get { return MakeMemberModelList(p => p.Victims); }
        }

        public int CaseId
        {
            get { return Process.CaseId; }
        }
        // ===================================================================================== []
        // Pivate
        private Process Process { get; set; }

        private List<MemberModel> MakeMemberModelList(Func<Process, IList<Member>> membersSelector)
        {
            // todo: Make Id type-safe -- to prevent using CaseId instead of ProcessId
            return membersSelector(Process).Select(m => new MemberModel(CaseId, m.Id)).ToList();
        }
        private string DoGetShortInfo()
        {
            return string.Format("{0}: {1}#{2} {3}/{4} {5}", Id, WorldName, CaseId, ActiveMembers.Count, ActiveMurderers.Count, Victims.AggregateBy(v => v.Name));
        }
    }
}