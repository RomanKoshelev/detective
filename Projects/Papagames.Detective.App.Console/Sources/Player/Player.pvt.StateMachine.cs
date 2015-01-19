using System.Collections.Generic;
using Papagames.Detective.Core.Game;
using Action = System.Action;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private Process _process;
        private readonly IDictionary<State, Action> _stateHandlers = new Dictionary<State, Action>();
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
        }
        
        private void RunStateMachine()
        {
            InitProcess();
            do
            {
                StepProcess();
                HandleState();
            } while (State != State.End);
        }

        private void InitProcess()
        {
            _process.Init();
        }

        private void StepProcess()
        {
            _process.Step();
        }

        private void HandleState()
        {
            if (_stateHandlers.Keys.Contains(State))
                _stateHandlers[State]();
        }
    }
}