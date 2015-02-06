using System;
using System.Linq;
using MoreLinq;
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
            History.StoreAnswer(Today, respondent, subject, answer);
            return answer;
        }

        private void DoArrest(Member suspect)
        {
            LastArrested = suspect;
            LastArrested.IsPrisoner = true;

            History.StoreArrest(Today, Detective, LastArrested);
            HistoryStoreEmotionalReactionOnArrest(LastArrested);
            
            DoStep();
        }
        private void DoEarlyArrest(Member suspect)
        {
            SetState(State.Arrest);
            DoArrest(suspect);
        }


        private void DoAsk(int respondent, int subject)
        {
            DoAsk(FindMember(respondent), FindMember(subject));
        }
        private void DoAutoAsk()
        {
            GetQuestioningRespondents().Shuffle().ForEach(respondent =>
            {
                var subject = ActiveMembers.Where(s => CanAskAbout(respondent, s)).RandomElement();
                DoAsk(respondent, subject);
            });
        }

        private void DoArrest(int suspect)
        {
            DoArrest(FindMember(suspect));
        }
        private void DoEarlyArrest(int suspect)
        {
            DoEarlyArrest(FindMember(suspect));
        }

        private void DoStop()
        {
            SetState(State.Stop);
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
            var victim = LastMurderer.SelectVictim(ActiveInnocents);
            victim.IsVictim = true;

            History.StoreMurder(Today, LastMurderer, victim);
            HistoryStoreEmotionalReactionOnMurder(victim);
        }
        private void DoSkipTo(State state)
        {
            Assert.IsTrue(state >= State, "Destinashion state [{0}] can't be achieved from current [{1}]", state, State);
            do
            {
                Assert.IsTrue(UserActions.Count == 1, "Can't select action among {0} actions for auto skipping to {1}", UserActions.Count, state);
                var action = UserActions[0];
                DoExecuteUserAction(action.Type, action.Args, autoSkip: true);
            } while (State != state && State != State.Finished);
            Assert.IsTrue(State==state, "Achived state [{0}] != destinasion [{1}]", State, state);
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
                History.StoreMurderEvidence(Today, witness, subject);
            }
            else
            {
                witness.RememberInnocent(subject);
                History.StoreInnocentEvidence(Today, witness, subject);
            }
        }
    }
}