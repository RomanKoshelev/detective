// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// ProcessModel.cs
// Roman, 2015-03-29 12:56 AM

using System;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crocodev.Common.Identifier;

namespace Crimenuts.App.Web.Models
{
    public class ProcessModel
    {
        // ===================================================================================== []
        // Constructor
        public ProcessModel( Identifiable< Process, int >.Identifier id )
        {
            Process = Schema.FindProcess( id );
        }

        // ===================================================================================== []
        // Properties
        public Identifiable< Process, int >.Identifier Id
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

        public int Today
        {
            get { return Process.Today; }
        }

        public Winner Winner
        {
            get { return Process.Winner; }
        }

        public IOptions Options
        {
            get { return Process.Options; }
        }

        // ===================================================================================== []
        // Statistics
        public int? TodayEvidencesNum
        {
            get { return Process.TodayEvidencesOpenNum; }
        }

        public int? MurderersLeft
        {
            get { return Process.ActiveMurderersOpenNum; }
        }

        public int? InnocentsLeft
        {
            get { return DoGetInnocentsLeft(); }
        }

        // ===================================================================================== []
        // Members
        public IList< MemberModel > ActiveMembers
        {
            get { return MakeMemberModelList( p => p.ActiveMembers ); }
        }

        public IList< MemberModel > ActiveMurderers
        {
            get { return MakeMemberModelList( p => p.ActiveMurderers ); }
        }

        public IList< MemberModel > Victims
        {
            get
            {
                return MakeMemberModelList( p => p.Victims )
                    .OrderBy( m => m.LastActivityaDay )
                    .ToList();
            }
        }

        public IList< MemberModel > Prisoners
        {
            get
            {
                return MakeMemberModelList( p => p.Prisoners )
                    .OrderBy( m => m.LastActivityaDay )
                    .ToList();
            }
        }

        public IList< MemberModel > Members
        {
            get { return MakeMemberModelList( p => p.Members ); }
        }

        // ===================================================================================== []
        // Today
        public MemberModel TodayVictim
        {
            get { return DoGetTodayVictim(); }
        }

        public MemberModel TodayPrisoner
        {
            get { return DoGetTodayPrisoner(); }
        }

        public IList< AnswerModel > TodayAnswers()
        {
            return History.Answers( Today );
        }

        // ===================================================================================== []
        // History
        public HistoryModel History
        {
            get { return MakeHistoryModel(); }
        }

        // ===================================================================================== []
        // Case
        public Identifiable< Case, int >.Identifier CaseId
        {
            get { return Process.CaseId; }
        }

        public CaseModel Case
        {
            get { return DoGetCaseModel(); }
        }

        // ===================================================================================== []
        // User Actions
        public IList< Process.UserAction > UserActions
        {
            get { return Process.UserActions; }
        }

        // ===================================================================================== []
        // Pivate
        private Process Process { get; set; }

        private List< MemberModel > MakeMemberModelList( Func< Process, IList< Member > > membersSelector )
        {
            return
                membersSelector( Process )
                    .Select( m => new MemberModel( m ) )
                    .ToList();
        }

        private string DoGetShortInfo()
        {
            return string.Format( "Process {0}: {1}.{2} {3}-{4}-{5} {6}",
                Id,
                WorldName,
                CaseId,
                ActiveMembers.Count,
                Prisoners.Count,
                Victims.Count,
                State );
        }

        private CaseModel DoGetCaseModel()
        {
            return new CaseModel( CaseId );
        }

        private HistoryModel MakeHistoryModel()
        {
            return new HistoryModel( Process.History );
        }

        private MemberModel DoGetTodayVictim()
        {
            return new MemberModel( Process.TodayVictim );
        }

        private MemberModel DoGetTodayPrisoner()
        {
            return new MemberModel( Process.TodayPrisoner );
        }

        private int? DoGetInnocentsLeft()
        {
            return ActiveMembers.Count - Process.ActiveMurderersOpenNum;
        }

        // ===================================================================================== []
        public bool UserActionIsEnabled( Process.UserAction.ActionType actionType )
        {
            return Process.UserActionIsEnabled( actionType );
        }
    }
}