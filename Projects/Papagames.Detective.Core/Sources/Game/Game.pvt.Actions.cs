using System;
using System.Linq;
using Papagames.Detective.Common;

namespace Papagames.Detective.Core
{
    public partial class Process
    {
        private readonly Random _random=new Random(333);

        private void DoWitnessActions()
        {
            for (var w = 0; w < MaxEvidenceNum; w++)
            {
                SelectWitnessAndEvidence();
            }
        }

        private void DoMurdererAction()
        {
            var murderer = ActiveMurderers.RandomElement();
            var victim = murderer.SelectVictim(ActiveInnocents);
            victim.IsVictim = true;

            History.StoreMurder(CurrentDay, murderer, victim);
            HistoryStoreEmotionalReactionOnMurder(victim);

            Stage.OnMurder(murderer, victim, Members, History);
        }

        private void DoDetectiveAction()
        {
            Stage.OnArrestStart(Members, History);

            var suspectNumber = Stage.GetSuspectNumberForArrest(ActiveMembers);
            var suspect = ActiveMembers.First(m => m.Number == suspectNumber);
            suspect.IsPrisoner = true;

            History.StoreArrest(CurrentDay, Detective, suspect);
            HistoryStoreEmotionalReactionOnArrest(suspect);

            Stage.OnArrestEnd(suspect, Members, History);
        }

        private void SelectWitnessAndEvidence()
        {
            var witness = ActiveInnocents.RandomElementUsing(_random);
            var subject = witness.SelectEvidence(ActiveMembers);

            if (subject == null) return;

            if (subject.IsMurderer)
            {
                witness.RememberMurderer(subject);
                History.StoreMurderEvidence(CurrentDay, witness, subject);
            }
            else
            {
                witness.RememberInnocent(subject);
                History.StoreInnocentEvidence(CurrentDay, witness, subject);
            }

            Stage.OnWitness(witness, subject);
        }
    }
}