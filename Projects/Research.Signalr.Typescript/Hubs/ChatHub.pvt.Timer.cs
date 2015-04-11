// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// ChatHub.pvt.Timer.cs

using System;
using System.Threading;

namespace Research.Signalr.Typescript.Hubs
{
    public partial class ChatHub
    {
        private Timer Timer { get; set; }
        private void StartTimer()
        {
            Logger.Trace( "StartTimer()" );

            var delayTime = new TimeSpan( 0, 0, 1 );
            var intervalTime = new TimeSpan( 0, 0, 1 );

            Timer = new Timer( onTimer, null, delayTime, intervalTime );
        }
    }
}