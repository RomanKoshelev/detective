// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// IGameHubClient.cs

using System.Collections.Generic;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Hub
{
    public interface IGameHubClient
    {
        void TickCountUpdated( int tickCount );
        void ProcessUpdated( ProcessModel model );
        void ProcessAnswersUpdated( string processId, List< AnswerModel > answerModels );
        void ProcessesReset();
    }
}