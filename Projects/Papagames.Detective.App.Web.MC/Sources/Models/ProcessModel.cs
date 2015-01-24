﻿using System;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class ProcessModel
    {
        // ===================================================================================== []
        // Constructor
        public ProcessModel(Process.Identifier id)
        {
            Process = Schema.FindProcess(id);
        }

        // ===================================================================================== []
        // Properties
        public Process.Identifier Id
        {
            get { return Process.Id; }
        }

        public string ShortInfo
        {
            get { return DoGetShortInfo(); }
        }

        public string WorldName
        {
            get { return Process.WorldName; }
        }

        public State State
        {
            get { return Process.State; }
        }

        public int CurrentDay
        {
            get { return Process.CurrentDay; }
        }

        // ===================================================================================== []
        // Members
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

        public IList<MemberModel> Prisoners
        {
            get { return MakeMemberModelList(p => p.Prisoners); }
        }

        // ===================================================================================== []
        // History
        public HistoryModel History
        {
            get { return MakeHistoryModel(); }
        }

        // ===================================================================================== []
        // Case
        public Case.Identifier CaseId
        {
            get { return Process.CaseId; }
        }

        public CaseModel Case
        {
            get { return DoGetCaseModel(); }
        }

        // ===================================================================================== []
        // User Actions
        public IList<Process.UserAction> UserActions
        {
            //Ref: use UserActionModel instead of UserAction
            get { return Process.UserActions; }
        }

        // ===================================================================================== []
        // Pivate
        private Process Process { get; set; }

        private List<MemberModel> MakeMemberModelList(Func<Process, IList<Member>> membersSelector)
        {
            return membersSelector(Process).Select(m => new MemberModel(m)).ToList();
        }

        private string DoGetShortInfo()
        {
            return string.Format("Process {0}: {1}.{2} {3}-{4}-{5} {6}", Id, WorldName, CaseId, ActiveMembers.Count,
                Prisoners.Count, Victims.Count, State);
        }

        private CaseModel DoGetCaseModel()
        {
            return new CaseModel(CaseId);
        }
        private HistoryModel MakeHistoryModel()
        {
            return new HistoryModel(Process.History);
        }

        // ===================================================================================== []
    }
}