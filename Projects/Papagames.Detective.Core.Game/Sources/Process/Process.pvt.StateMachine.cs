using System;
using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private void DoStep()
        {
            State = _stateHandlers[State]();
        }

        private readonly IDictionary<State, Func<State>> _stateHandlers = new Dictionary<State, Func<State>>();
        private void InitStateHandlers()
        {
            _stateHandlers[State.Initial] = Initial;
            _stateHandlers[State.Start] = Start;
            _stateHandlers[State.Night] = Night;
            _stateHandlers[State.CheckNight] = CheckNight;
            _stateHandlers[State.Morning] = Morning;
            _stateHandlers[State.Questioning] = Questioning;
            _stateHandlers[State.Arrest] = Arrest;
            _stateHandlers[State.CheckArrest] = CheckArrest;
            _stateHandlers[State.NextDay] = NextDay;
            _stateHandlers[State.DetectiveWin] = DetectiveWin;
            _stateHandlers[State.MurderersWin] = MurderersWin;
            _stateHandlers[State.Break] = Break;
            _stateHandlers[State.End] = End;
            _stateHandlers[State.Finished] = Finished;
        }

        private State Initial()
        {
            return State.Start;
        }

        private State Start()
        {
            CurrentDay = 1;
            return State.Night;
        }

        private State Night()
        {
            HistoryStoreParticipations();

            DoEvidence();
            DoMurder();

            return State.CheckNight;
        }

        private State Morning()
        {
            UpdateMembersKnownCounts();
            
            return State.Questioning;
        }

        private State Questioning()
        {
            return State.Arrest;
        }
        
        private State Arrest()
        {
            return State.CheckArrest;
        }

        private State NextDay()
        {
            CurrentDay++;
            return State.Night;
        }

        private State CheckArrest()
        {
            return CheckBefore(State.NextDay);
        }

        private State CheckNight()
        {
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
            DidDeteciveWin = true;
            return State.End;
        }
        private State MurderersWin()
        {
            DidDeteciveWin = true;
            return State.End;
        }

        private State End()
        {
            return State.Finished;
        }

        private State Break()
        {
            return State.End;
        }

        private State Finished()
        {
            throw new DetectiveException("State {0} can't be run", State);
        }

        private void DoRunFirstNight()
        {
            State = Initial();
            State = Start();
            State = Night();
            State = State.Finished;
        }
    }
}