using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private Process _process;
        private void DoRun(Process process)
        {
            _process = process;

            switch (process.State)
            {
                case State.Start:
                    OnGameStart();
                    break;
            }
        }
    }
}