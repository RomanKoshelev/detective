using System;
using Crimenuts.Utils;
using MoreLinq;

namespace Crimenuts.Core.Game
{
    public partial class Process
    {
        private void UpdateMembersKnownCounts()
        {
            ActiveMembers.ForEach(m => m.UpdateKnownCounts(ActiveMembers.Count, ActiveMurderers.Count));
        }
        
        private void DoInit()
        {
            Winner = Winner.Unknown;
            SetState(State.Initial);
            InitMembers();
            InitHistory();
        }

        private int CalcMaxEvidenceNum()
        {
            var n = (int)Math.Ceiling(ActiveMembers.Count * Case.World.EvidenceRate);
            n = Math.Max(n, 0);
            n = Math.Min(n, ActiveMembers.Count * (ActiveMembers.Count - 1));
            return n;
        }

        private void AssertState(State state)
        {
            CrimenutsAssert.Equal(State, state, "Wrong state {0}", State);
        }
    }
}