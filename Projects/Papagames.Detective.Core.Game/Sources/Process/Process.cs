using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        public Case Case { get; set; }
        public State State { get; private set; }

        public IList<Member> Members { get; set; }
        public int CurrentDay { get; private set; }
        public bool DidDeteciveWin { get; set; }

        public IList<Member> ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList<Member> ActiveInnocents
        {
            get { return DoGetActiveInnocents(); }
        }

        public int MaxEvidenceNum
        {
            get { return CalcMaxEvidenceNum(); }
        }

        public Member LastVictim { get; private set; }
        public Member LastMurderer { get; private set; }
        public History History { get; set; }

        public Process(Case gcase)
        {
            Case = gcase;
            Reset();
        }

        public Answer AskMemberAboutSubject(Member respondent, Member subject)
        {
            return DoAskMemberAboutSubject(respondent, subject);
        }
    }
}