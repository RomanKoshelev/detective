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
        
        private void Reset()
        {
            DidDeteciveWin = false;
            State = State.Start;
            InitMembers();
            InitHistory();
        }
    }
}