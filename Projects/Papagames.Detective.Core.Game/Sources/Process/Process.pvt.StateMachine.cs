using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private void DoStep()
        {
            switch (State)
            {
                case State.Initial:
                    Set(State.Start);
                    break;
                case State.Start:
                    Start(State.Night);
                    break;
                case State.Night:
                    Night(State.CheckNight);
                    break;
                case State.CheckNight:
                    CheckAndSet(State.Morning, State.DetectiveWin, State.MurderersWin);
                    break;
                case State.Morning:
                    Morning(State.Questioning);
                    break;
                case State.Questioning:
                    Set(State.Arrest);
                    break;
                case State.Arrest:
                    Set(State.CheckArrest);
                    break;
                case State.CheckArrest:
                    CheckAndSet(State.NextDay, State.DetectiveWin, State.MurderersWin);
                    break;
                case State.NextDay:
                    NextDay(State.Night);
                    break;
                case State.DetectiveWin:
                    DetectiveWin(State.End);
                    break;
                case State.MurderersWin:
                    Set(State.End);
                    break;
                case State.Break:
                    Set(State.End);
                    break;
                case State.End:
                    Set(State.Finished);
                    break;
                case State.Finished:
                    Finished(State.Error);
                    break;
            }
        }

        private void Set(State state)
        {
            State = state;
        }

        private void Start(State state)
        {
            CurrentDay = 1;
            Set(state);
        }

        private void Night(State state)
        {
            HistoryStoreParticipations();

            DoEvidence();
            DoMurder();

            Set(state);
        }

        private void Morning(State state)
        {
            UpdateMembersKnownCounts();

            Set(state);
        }

        private void NextDay(State state)
        {
            CurrentDay++;
            Set(state);
        }

        private void CheckAndSet(State stateNext, State stateWin, State stateFail)
        {
            Set(ActiveMembers.NotExists(m => m.IsMurderer)
                ? stateWin
                : ActiveMembers.NotExists(m => m.IsInnocent)
                    ? stateFail
                    : stateNext);
        }

        private void DetectiveWin(State state)
        {
            DidDeteciveWin = true;
            Set(state);
        }

        private void Finished(State state)
        {
            throw new DetectiveException("State {0} can't be run", state);
        }

        private void DoRunFirstNight()
        {
            do DoStep(); while (State != State.Questioning);
            State = State.Finished;
        }
    }
}