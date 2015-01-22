using System;
using System.Collections.Generic;
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
        public void Break()
        {
            DoBreak();
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
        // User Actions Menu
        public class UserAction
        {
            public enum ActionType
            {
                None,
                Skip,
                Ask,
                Arrest
            }

            public ActionType Type = ActionType.None;
            public IList<Object> Params = new List<object>();
            public override string ToString()
            {
                return string.Format("{0} {1}", Type, Params.AggregateBy(p => p.ToString()));
            }
        }

        public IList<UserAction> UserActions
        {
            get { return _userActions; }
        }
        public void RunUserAction(UserAction.ActionType actionType)
        {
            DoRunUserAction(actionType);
        }

        // ===================================================================================== []
        // Utils
        public bool DidDeteciveWin { get; private set; }

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