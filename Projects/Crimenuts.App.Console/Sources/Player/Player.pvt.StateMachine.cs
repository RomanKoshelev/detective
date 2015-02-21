using System.Collections.Generic;
using Crimenuts.Core.Game;
using Action = System.Action;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        private Process _process;
        private readonly IDictionary<State, Action> _stateHandlers = new Dictionary<State, Action>();
        private void InitStateHandlers()
        {
            _stateHandlers[Core.Game.State.Start] = Start;
            _stateHandlers[Core.Game.State.Morning] = Morning;
            _stateHandlers[Core.Game.State.Questioning] = Questioning;
            _stateHandlers[Core.Game.State.Arrest] = Arrest;
            _stateHandlers[Core.Game.State.DetectiveWin] = DetectiveWin;
            _stateHandlers[Core.Game.State.MurderersWin] = MurdererWin;
            _stateHandlers[Core.Game.State.Error] = Error;
            _stateHandlers[Core.Game.State.End] = End;
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
            } while (State != Core.Game.State.End);
        }

        private void InitProcess()
        {
            _process.Init();
        }

        private void StepProcess()
        {
            _process.Skip();
        }

        private void HandleState()
        {
            if (_stateHandlers.Keys.Contains(State))
                _stateHandlers[State]();
        }
    }
}