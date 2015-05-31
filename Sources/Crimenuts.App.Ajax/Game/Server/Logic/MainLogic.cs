// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// MainLogic.cs

using System;
using System.Collections.Generic;
using Crimenuts.App.Ajax.Game.Server.Clients;
using Crimenuts.App.Ajax.Game.Server.Config;
using Crimenuts.App.Ajax.Game.Server.Managers;
using Crimenuts.App.Ajax.Game.Server.Models;
using NLog;

namespace Crimenuts.App.Ajax.Game.Server.Logic
{
    public class MainLogic : IGameLogic, ITimeLogic
    {
        #region Ctor

        public MainLogic( IGameClient clients )
        {
            Logger.Trace( "MainLogic" );

            _clients = clients;
            _processManager = new ProcessManager( _clients );
        }

        #endregion


        #region ITimeLogic

        DateTime ITimeLogic.LastTime { get; set; }

        int ITimeLogic.GetUpdateInterval()
        {
            return ( int ) ( UpdateInterval*1000 );
        }

        DateTime ITimeLogic.CurrentTime { get; set; }

        void ITimeLogic.Update()
        {
            UpdateTime();
            _auxLlogics.ForEach( l => l.Update() );
            _clients.TickCountUpdated( _tickCount++ );
        }
        #endregion


        #region IGameLogic

        ProcessModel IGameLogic.GetProcess( string processId )
        {
            return _processManager.GetModel( processId );
        }

        void IGameLogic.AutoAnswer( string processId )
        {
            _processManager.AutoAnswer( processId );
        }

        void IGameLogic.ResetProcesses()
        {
            _tickCount = 0;
            _processManager.Reset();
        }

        #endregion


        #region Constants

        private const double UpdateInterval = Settings.Dynamic.Game.Update.Interval;

        #endregion


        #region Fields

        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();
        private readonly IGameClient _clients;
        private readonly IProcessManager _processManager;
        private readonly List< IAuxLogic > _auxLlogics = new List< IAuxLogic >();
        private int _tickCount;

        #endregion


        #region Utils

        private void UpdateTime()
        {
            var m = this as ITimeLogic;
            m.LastTime = m.CurrentTime;
            m.CurrentTime = DateTime.Now;
        }

        #endregion
    }
}