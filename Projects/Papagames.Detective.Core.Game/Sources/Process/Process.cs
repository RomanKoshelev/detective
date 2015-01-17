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
        public Member LastArrested { get; set; }

        public Process(Case gcase)
        {
            Case = gcase;
            DoInit();
        }

        public Answer Ask(Member respondent, Member subject)
        {
            return DoAsk(respondent, subject);
        }

        public void Arrest(Member suspect)
        {
            DoArrest(suspect);
        }
        public void Init()
        {
            DoInit();
        }
    }
}