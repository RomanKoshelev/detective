using System.Linq;
using MoreLinq;

namespace Crimenuts.Core.Game
{
    public partial class Process
    {
        private void InitHistory()
        {
            History = new History();
        }

        private void HistoryStoreEmotionalReactionOnMurder(Member victim)
        {
            foreach (var member in ActiveMembers)
            {
                var emotion = member.ExpressEmotionOnMurderOrArrest(victim);
                History.StoreEmotionOnMurder(Today, member, victim, emotion);
            }
        }

        private void HistoryStoreEmotionalReactionOnArrest(Member arrested)
        {
            foreach (var member in ActiveMembers)
            {
                var emotion = member.ExpressEmotionOnMurderOrArrest(arrested);
                History.StoreEmotionOnArrest(Today, member, arrested, emotion);
            }
        }

        private void HistoryStoreParticipations()
        {
            ActiveMembers.ForEach(m => History.StoreParticipation(Today, m));
        }

        private bool AlreadyHasAnsweredToday(Member correspondent, Member subject)
        {
            return History.GetAnswers(correspondent, Today).Any(r => r.Subject == subject);
        }
    }
}