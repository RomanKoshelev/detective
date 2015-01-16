using System;
using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        #region Pub Properties

        // ===================================================================================== []

        public IWorld World { get; private set; }
        public State State { get; private set; }
        public List<Member> Members { get; private set; }
        public int CurrentDay { get; private set; }
        public bool DidDeteciveWin { get; set; }

        public IList<Member> ActiveMembers
        {
            get { return DoGetActiveMembers(); }
        }

        public IList<Member> ActiveMurderers
        {
            get { return DoGetActiveMurderers(); }
        }

        public IList<Member> ActiveInnocents
        {
            get { return DoGetActiveInnocents(); }
        }

        // ===================================================================================== []

        #endregion

        #region Constructor

        // ===================================================================================== []

        public Process(Case gcase)
        {
            World = gcase.World;

            InitHistory();
            InitMembers();
        }

        // ===================================================================================== []

        #endregion

        #region Pub Methods

        // ===================================================================================== []

        public int CalcMaxMurdersNum(int membersNum)
        {
            return DoCalcMaxMurdersNum(membersNum);
        }

        public void Run(int memberNum, int murderNum)
        {
            DoRun(memberNum, murderNum);
        }

        // ===================================================================================== []

        #endregion
    }
}