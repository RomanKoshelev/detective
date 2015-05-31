// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// GameClientsProxy.cs

using System.Collections.Generic;
using Crimenuts.App.Ajax.Game.Server.Hub;
using Crimenuts.App.Ajax.Game.Server.Models;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Crimenuts.App.Ajax.Game.Server.Clients
{
    public class GameClientsProxy : IGameClient
    {
        #region IGameHubClient

        void IGameHubClient.TickCountUpdated( int tickCount )
        {
            Clients.All.TickCountUpdated( tickCount );
        }

        void IGameHubClient.ProcessUpdated( ProcessModel model )
        {
            Clients.All.SessionUpdated( model );
        }

        void IGameHubClient.ProcessAnswersUpdated( string processId, List< AnswerModel > answerModels )
        {
            // Todo:> Send only for those clients who works with process haven the same processId
            Clients.All.ProcessAnswersUpdated( processId, answerModels );
        }

        void IGameHubClient.ProcessesReset()
        {
            Clients.All.ProcessesReset();
        }

        #endregion


        #region Static

        private static IHubConnectionContext< dynamic > Clients
        {
            get { return Context.Clients; }
        }

        private static IHubContext Context
        {
            get { return GlobalHost.ConnectionManager.GetHubContext< GameHub >(); }
        }

        #endregion
    }
}