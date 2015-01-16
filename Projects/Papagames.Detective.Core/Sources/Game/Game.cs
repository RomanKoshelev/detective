using System;
using System.Collections.Generic;

namespace Papagames.Detective.Core
{
    public partial class Game
    {
        #region Pub Properties

        // ===================================================================================== []

        public IWorld World { get; private set; }
        public IStage Stage { get; private set; }
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

        public Game(IStage stage, IWorld world)
        {
            State = State.Error;
            Stage = stage;
            World = world;

            InitHistory();
            InitMembers();
        }

        public Game(Case gcase)
        {
            throw new NotImplementedException();
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