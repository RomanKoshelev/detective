// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.cs

using System.Collections.Generic;
using System.Diagnostics;
using Crimenuts.Core.Game.Enums;
using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game.Process
{
    [DebuggerDisplay( "State = {State}" )]
    public partial class Process : Identifiable< Process, int >
    {
        // ===================================================================================== []
        // Constructor
        public Process( Case.Case gcase )
        {
            Case = gcase;
            Id = ( Identifier ) 0;
            DoInit();
        }

        // ===================================================================================== []
        // Properties
        public Identifier Id { get; set; }
        public int Today { get; private set; }
        public History.History History { get; private set; }
        public Winner Winner { get; private set; }

        public State State
        {
            get { return _state; }
        }

        // ===================================================================================== []
        // Case
        public Case.Case Case { get; private set; }

        public Identifiable< Case.Case, int >.Identifier CaseId
        {
            get { return Case.Id; }
        }

        // ===================================================================================== []
        // Members
        public IList< Member.Member > Members { get; private set; }

        public Member.Member TodayVictim
        {
            get { return DoGetTodayVictim(); }
        }

        public Member.Member TodayPrisoner
        {
            get { return DoGetTodayPrisoner(); }
        }

        public Member.Member LastMurderer { get; private set; }
        public Member.Member LastArrested { get; private set; }

        public IList< Member.Member > ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList< Member.Member > ActiveInnocents
        {
            get { return DoGetActiveInnocents(); }
        }

        public IList< Member.Member > ActiveMurderers
        {
            get { return DoGetActiveMurderers(); }
        }

        public IList< Member.Member > Victims
        {
            get { return DoGetVictims(); }
        }

        public IList< Member.Member > Prisoners
        {
            get { return DoGetPrisoners(); }
        }

        // ===================================================================================== []
        // Open Info
        public int? ActiveMurderersOpenNum
        {
            get { return DoGetActiveMurderersOpenNum(); }
        }

        public int? TodayEvidencesOpenNum
        {
            get { return DoGetTodayEvidencesOpenNum(); }
        }

        // ===================================================================================== []
        // User Actions
        public Answer Ask( Member.Member respondent, Member.Member subject )
        {
            return DoAsk( respondent, subject );
        }

        public void Arrest( Member.Member suspect )
        {
            DoArrest( suspect );
        }

        public void Skip()
        {
            DoSkip();
        }

        public void Stop()
        {
            DoStop();
        }

        public void SkipTo( State state )
        {
            DoSkipTo( state );
        }

        // ===================================================================================== []
        // Core Actions
        public void Init()
        {
            DoInit();
        }

        public void RunFirstNightUntilQuestioning()
        {
            DoRunFirstNightUntilQuestioning();
        }

        // ===================================================================================== []
        // User Action Menu
        public IList< UserAction > UserActions
        {
            get { return _userActions; }
        }

        public void ExecuteUserAction( UserAction.ActionType actionType, int[] actionParams, bool autoSkip = true )
        {
            actionParams = actionParams ?? new int[0];
            DoExecuteUserAction( actionType, actionParams, autoSkip );
        }

        public bool UserActionIsEnabled( UserAction.ActionType actionType )
        {
            return IsActionEnabled( actionType );
        }

        // ===================================================================================== []
        // Utils
        public int MaxEvidenceNum
        {
            get { return CalcMaxEvidenceNum(); }
        }

        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public IOptions.IOptions Options
        {
            get { return Case; }
        }
    }
}