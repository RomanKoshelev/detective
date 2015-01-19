using System;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        public void Step()
        {
            // todo: refactore it
/*
                    private void InitStateHandlers()
        {
            _stateHandlers[State.Start] = Start;
            _stateHandlers[State.Morning] = Morning;
            _stateHandlers[State.Questioning] = Questioning;
            _stateHandlers[State.Arrest] = Arrest;
            _stateHandlers[State.DetectiveWin] = DetectiveWin;
            _stateHandlers[State.MurderersWin] = MurdererWin;
            _stateHandlers[State.Error] = Error;
            _stateHandlers[State.End] = End;
        }

        private void DoRun(Process process)
        {
            _process = process;
            RunStateMachine();
        }*/
            switch (State)
            {
                case State.Initial:
                    State = Initial();
                    break;
                case State.Start:
                    State = Start();
                    break;
                case State.Night:
                    State = Night();
                    break;
                case State.CheckNight:
                    State = CheckNight();
                    break;
                case State.Morning:
                    State = Morning();
                    break;
                case State.Questioning:
                    State = Questioning();
                    break;
                case State.Arrest:
                    State = Arrest();
                    break;
                case State.CheckArrest:
                    State = CheckArrest();
                    break;
                case State.NextDay:
                    State = NextDay();
                    break;
                case State.DetectiveWin:
                    State = DetectiveWin();
                    break;
                case State.MurderersWin:
                    State = MurderersWin();
                    break;
                case State.Break:
                    State = Break();
                    break;
                case State.End:
                    State = End();
                    break;
                default:
                    throw new DetectiveException("Unknoun state [{0}]", State);
            }
        }

        private State Initial()
        {
            AssertState(State.Initial);
            return State.Start;
        }

        private State Start()
        {
            AssertState(State.Start);
            CurrentDay = 1;
            return State.Night;
        }

        private State Night()
        {
            AssertState(State.Night);

            HistoryStoreParticipations();

            DoEvidence();
            DoMurder();

            return State.CheckNight;
        }

        private State Morning()
        {
            AssertState(State.Morning);

            UpdateMembersKnownCounts();
            
            return State.Questioning;
        }

        private State Questioning()
        {
            AssertState(State.Questioning);
            return State.Arrest;
        }
        
        private State Arrest()
        {
            AssertState(State.Arrest);
            return State.CheckArrest;
        }

        private State NextDay()
        {
            AssertState(State.NextDay);
            CurrentDay++;
            return State.Night;
        }

        private State CheckArrest()
        {
            AssertState(State.CheckArrest);
            return CheckBefore(State.NextDay);
        }

        private State CheckNight()
        {
            AssertState(State.CheckNight);
            return CheckBefore(State.Morning);
        }

        private State CheckBefore(State nextState)
        {
            return ActiveMembers.NotExists(m => m.IsMurderer)
                ? State.DetectiveWin
                : ActiveMembers.NotExists(m => m.IsInnocent)
                    ? State.MurderersWin
                    : nextState;
        }

        private State DetectiveWin()
        {
            AssertState(State.DetectiveWin);
            DidDeteciveWin = true;
            return State.End;
        }
        private State MurderersWin()
        {
            AssertState(State.MurderersWin);
            DidDeteciveWin = true;
            return State.End;
        }

        private void AssertState(State state)
        {
            Assert.Equal(State, state, "Wrong state {0}", State);
        }
        private State End()
        {
            AssertState(State.End);
            return State.Finished;
        }

        private State Break()
        {
            AssertState(State.Break);
            return State.End;
        }

        private void DoRunFirstNight()
        {
            State = Initial();
            State = Start();
            State = Night();
        }
    }
}