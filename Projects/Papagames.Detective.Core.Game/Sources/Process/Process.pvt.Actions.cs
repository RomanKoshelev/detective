using System;
using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        // ===================================================================================== []
        // User Actions
        private void DoSkip()
        {
            DoStep();
        }

        private Answer DoAsk(Member respondent, Member subject)
        {
            var answer = respondent.Ask(subject);
            History.StoreAnswer(CurrentDay, respondent, subject, answer);
            return answer;
        }

        private void DoArrest(Member suspect)
        {
            LastArrested = suspect;
            LastArrested.IsPrisoner = true;

            History.StoreArrest(CurrentDay, Detective, LastArrested);
            HistoryStoreEmotionalReactionOnArrest(LastArrested);
        }

        // ===================================================================================== []
        // Core Actions
        private void DoEvidence()
        {
            for (var w = 0; w < MaxEvidenceNum; w++)
            {
                SelectWitnessAndEvidence();
            }
        }

        private void DoMurder()
        {
            LastMurderer = ActiveMurderers.RandomElement();
            LastVictim = LastMurderer.SelectVictim(ActiveInnocents);
            LastVictim.IsVictim = true;

            History.StoreMurder(CurrentDay, LastMurderer, LastVictim);
            HistoryStoreEmotionalReactionOnMurder(LastVictim);
        }

        // ===================================================================================== []
        // Utils
        private readonly Random _random = new Random(333);

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
        }
    }
}