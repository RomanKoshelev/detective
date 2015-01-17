using System;
using MoreLinq;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private void UpdateMembersKnownCounts()
        {
            ActiveMembers.ForEach(m =>
            {
                m.ActualMurderersCount = ActiveMurderers.Count;
                m.ActualMembersCount = ActiveMembers.Count;
            });
        }        
        
        private void DoInit()
        {
            DidDeteciveWin = false;
            State = State.Initial;
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
    }
}