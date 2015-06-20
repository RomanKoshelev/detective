// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IProcessManager.cs

using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Managers
{
    public interface IProcessManager
    {
        ProcessModel GetModel( string processId );
        void AutoAnswer( string processId );
        void Reset();
        void Arrest( string processId, int memberId );
        void Mark( string processId, int memberId );
        void Continue( string processId );
        void EarlyArrest( string processId, int memberId );
    }
}