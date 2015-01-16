using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Common;
using Papagames.Detective.Core.Game;
using Action = System.Action;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private Process _process;
        private readonly IDictionary<State, Action> _stateHandlers = new Dictionary<State, Action>();

        private void DoRun(Process process)
        {
            _process = process;
            RunStateMachine();
        }

        private void InitStateHandlers()
        {
            _stateHandlers[State.Error] = OnError;
            _stateHandlers[State.Start] = OnStart;
            _stateHandlers[State.Questioning] = OnQuestioning;
            _stateHandlers[State.Morning] = OnMorning;
            _stateHandlers[State.Arrest] = OnArrest;
            _stateHandlers[State.DetectiveWin] = OnDetectiveWin;
            _stateHandlers[State.MurdererWin] = OnMurdererWin;
        }

        private State State
        {
            get { return _process.State; }
        }

        private void RunStateMachine()
        {
            do
            {
                OnCurentState();
                RunNextState();
            } while (State != State.Arrest);
        }

        private void RunNextState()
        {
            _process.Step();
        }

        private void OnCurentState()
        {
            if (_stateHandlers.Keys.Contains(State))
                _stateHandlers[State]();
        }
    }
}