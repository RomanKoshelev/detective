// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.pvt.Processes.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils;
using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game.Schema
{
    public static partial class Schema
    {
        private static void InitProcesses()
        {
            Processes = new List< Process.Process >();

            Cases.ForEach( CreateStartProcesses );
        }

        private static void CreateStartProcesses( Case.Case c )
        {
            const int procNum = 1;
            for( var i = 0; i < procNum; i++ ) {
                DoNewProcess( c ).RunFirstNightUntilQuestioning();
            }
        }

        private static Process.Process DoNewProcess( Case.Case gcase )
        {
            var gprocess = new Process.Process( gcase );
            Processes.Add( gprocess );
            gprocess.Id =
                ( Identifiable< Process.Process, int >.Identifier ) ( Processes.Select( p => ( int ) p.Id ).Max() + 1 );
            return gprocess;
        }

        private static Process.Process DoFindProcess( Identifiable< Process.Process, int >.Identifier processId )
        {
            var process = Processes.Find( p => p.Id == processId );

            CrimenutsAssert.NotNull( process, "Can't find process {0}", processId );

            return process;
        }

        private static void DoExecuteProcess(
            Identifiable< Process.Process, int >.Identifier processId,
            Process.Process.UserAction.ActionType actionType,
            int[] actionParams,
            bool autoSkip )
        {
            DoFindProcess( processId ).ExecuteUserAction( actionType, actionParams, autoSkip );
        }

        private static void DoSkipProcessTo( Identifiable< Process.Process, int >.Identifier processId, State state )
        {
            DoFindProcess( processId ).SkipTo( state );
        }
    }
}