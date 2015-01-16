using System;
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

        public Process(Case gcase)
        {
            Case = gcase;
            Reset();
        }
    }
}