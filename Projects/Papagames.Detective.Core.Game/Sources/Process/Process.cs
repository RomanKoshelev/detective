using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process : Identifiable<int, Process>
    {
        public Process(Case gcase)
        {
            Case = gcase;
            Id = (Identifier) 0;
            DoInit();
        }

        public Identifier Id { get; set; }
        public Case Case { get; set; }

        public State State { get; private set; }

        public IList<Member> Members { get; set; }
        public int CurrentDay { get; private set; }
        public bool DidDeteciveWin { get; set; }

        public IList<Member> ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList<Member> Victims
        {
            get { return DoGetVictims(); }
        }

        public IList<Member> ActiveInnocents
        {
            get { return DoGetActiveInnocents(); }
        }

        public IList<Member> ActiveMurderers
        {
            get { return DoGetActiveMurderers(); }
        }

        public IList<Member> Prisoners
        {
            get { return DoGetPrisoners(); }
        }

        public int MaxEvidenceNum
        {
            get { return CalcMaxEvidenceNum(); }
        }

        public Member LastVictim { get; private set; }
        public Member LastMurderer { get; private set; }
        public History History { get; set; }
        public Member LastArrested { get; set; }

        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public Case.Identifier CaseId
        {
            get { return Case.Id; }
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

        public void RunFirstNight()
        {
            DoRunFirstNight();
        }

        public void Step()
        {
            DoStep();
        }
    }
 }