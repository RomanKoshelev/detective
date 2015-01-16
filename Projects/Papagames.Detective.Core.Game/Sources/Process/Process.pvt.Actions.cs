using System;
using System.Linq;
using Papagames.Detective.Common;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private readonly Random _random=new Random(333);

        private Member Detective
        {
            get { return Case.Detective; }
        }

        private int CalcMaxEvidenceNum()
        {
            var n = (int) Math.Ceiling(ActiveMembers.Count*Case.World.EvidenceRate);
            n = Math.Max(n, 0);
            n = Math.Min(n, ActiveMembers.Count*(ActiveMembers.Count - 1));
            return n;
        }

        private void DoWitnessActions()
        {
            for (var w = 0; w < MaxEvidenceNum; w++)
            {
                SelectWitnessAndEvidence();
            }
        }

        private void DoMurdererAction()
        {
            LastMurderer = ActiveMurderers.RandomElement();
            LastVictim = LastMurderer.SelectVictim(ActiveInnocents);
            LastVictim.IsVictim = true;

            History.StoreMurder(CurrentDay, LastMurderer, LastVictim);
            HistoryStoreEmotionalReactionOnMurder(LastVictim);
        }

        private void DoDetectiveAction()
        {
            //TODO suspectNumber = 2 : Stage.GetSuspectNumberForArrest(ActiveMembers);
            var suspectNumber = 2; // Stage.GetSuspectNumberForArrest(ActiveMembers);
            var suspect = ActiveMembers.First(m => m.Number == suspectNumber);
            suspect.IsPrisoner = true;

            History.StoreArrest(CurrentDay, Detective, suspect);
            HistoryStoreEmotionalReactionOnArrest(suspect);
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
        }

        private Answer DoAskMemberAboutSubject(Member respondent, Member subject)
        {
            var answer = respondent.Ask(subject);
            History.StoreAnswer(CurrentDay, respondent, subject, answer);
            return answer;
        }
    }
}