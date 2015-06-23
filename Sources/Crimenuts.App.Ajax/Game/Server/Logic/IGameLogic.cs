// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameLogic.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public interface IGameLogic
    {
        ProcessModel GetProcess( string processId );
        void AutoAnswer( string processId );
        void Annotate( string processId, int memberId, string note );
        void EarlyArrest( string processId, int memberId );
        void Arrest( string processId, int memberId );
        void Continue( string processId );
        void ResetProcesses();
    }
}