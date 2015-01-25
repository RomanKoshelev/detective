﻿using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process : Identifiable<int, Process>
    {
        // ===================================================================================== []
        // Constructor
        public Process(Case gcase)
        {
            Case = gcase;
            Id = (Identifier) 0;
            DoInit();
        }

        // ===================================================================================== []
        // Properties
        public Identifier Id { get; set; }
        public int CurrentDay { get; private set; }
        public History History { get; private set; }
        public Winner Winner { get; private set; }

        public State State
        {
            get { return _state; }
        }

        // ===================================================================================== []
        // Case
        public Case Case { get; private set; }

        public Case.Identifier CaseId
        {
            get { return Case.Id; }
        }

        // ===================================================================================== []
        // Members
        public IList<Member> Members { get; private set; }
        public Member LastVictim { get; private set; }
        public Member LastMurderer { get; private set; }
        public Member LastArrested { get; private set; }

        public IList<Member> ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList<Member> ActiveInnocents
        {
            get { return DoGetActiveInnocents(); }
        }

        public IList<Member> ActiveMurderers
        {
            get { return DoGetActiveMurderers(); }
        }

        public IList<Member> Victims
        {
            get { return DoGetVictims(); }
        }

        public IList<Member> Prisoners
        {
            get { return DoGetPrisoners(); }
        }

        public int? OpenActiveMurderersNum
        {
            get { return DoOpenActiveMurderersNum(); }
        }

        // ===================================================================================== []
        // User Actions
        public Answer Ask(Member respondent, Member subject)
        {
            return DoAsk(respondent, subject);
        }

        public void Arrest(Member suspect)
        {
            DoArrest(suspect);
        }

        public void Skip()
        {
            DoSkip();
        }

        public void Stop()
        {
            DoStop();
        }

        // ===================================================================================== []
        // Core Actions
        public void Init()
        {
            DoInit();
        }

        public void RunFirstNight()
        {
            DoRunFirstNight();
        }

        // ===================================================================================== []
        // User Action Menu
        public IList<UserAction> UserActions
        {
            get { return _userActions; }
        }

        public void ExecuteUserAction(UserAction.ActionType actionType, int[] actionParams, bool autoSkip = true)
        {
            actionParams = actionParams ?? new int[0];
            DoExecuteUserAction(actionType, actionParams, autoSkip);
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
    }
}