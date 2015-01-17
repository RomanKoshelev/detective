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
            _stateHandlers[State.Start] = Start;
            _stateHandlers[State.Morning] = Morning;
            _stateHandlers[State.Questioning] = Questioning;
            _stateHandlers[State.Arrest] = Arrest;
            _stateHandlers[State.DetectiveWin] = DetectiveWin;
            _stateHandlers[State.MurdererWin] = MurdererWin;
            _stateHandlers[State.Error] = Error;
            _stateHandlers[State.End] = End;
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
            } while (State != State.End);
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