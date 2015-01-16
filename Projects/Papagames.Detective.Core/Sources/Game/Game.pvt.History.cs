using MoreLinq;

namespace Papagames.Detective.Core
{
    public partial class Process
    {
        private History History { get; set; }

        private void InitHistory()
        {
            History = new History();
        }

        private void HistoryStoreEmotionalReactionOnMurder(Member victim)
        {
            foreach (var member in ActiveMembers)
            {
                var emotion = member.ExpressEmotionOnMurderOrArrest(victim);
                History.StoreEmotionOnMurder(CurrentDay, member, victim, emotion);
            }
        }

        private void HistoryStoreEmotionalReactionOnArrest(Member arrested)
        {
            foreach (var member in ActiveMembers)
            {
                var emotion = member.ExpressEmotionOnMurderOrArrest(arrested);
                History.StoreEmotionOnArrest(CurrentDay, member, arrested, emotion);
            }
        }

        private void HistoryStoreParticipations()
        {
            ActiveMembers.ForEach(m => History.StoreParticipation(CurrentDay, m));
        }
    }
}