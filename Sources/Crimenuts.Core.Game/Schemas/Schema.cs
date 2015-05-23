// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.cs

using System.Collections.Generic;
using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Masters;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;
using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game.Schemas
{
    public static partial class Schema
    {
        // ===================================================================================== []
        // Constructor
        static Schema()
        {
            InitMaster();
            InitWorlds();
            InitCases();
            InitProcesses();
        }

        // ===================================================================================== []
        // Worlds
        public enum WorldId
        {
            Simpsons,
            Random
        }

        // ===================================================================================== []
        // Master
        public static Master Master { get; private set; }

        // ===================================================================================== []
        // Cases
        public static List< Case > Cases { get; private set; }

        public static Case FindCase( Identifiable< Case, int >.Identifier caseId )
        {
            return DoFindCase( caseId );
        }

        public static Case NewCase( WorldId worldId, int memberNum, int murderNum )
        {
            return DoNewCase( worldId, memberNum, murderNum );
        }

        // ===================================================================================== []
        // Processes
        public static List< Process > Processes { get; private set; }

        public static Process NewProcess( Case gcase )
        {
            return DoNewProcess( gcase );
        }

        public static Identifiable< Process, int >.Identifier NewProcess(
            Identifiable< Case, int >.Identifier caseId )
        {
            return NewProcess( DoFindCase( caseId ) ).Id;
        }

        public static Process FindProcess( Identifiable< Process, int >.Identifier processId )
        {
            return DoFindProcess( processId );
        }

        public static void ExecuteProcess(
            Identifiable< Process, int >.Identifier processId,
            Process.UserAction.ActionType actionType,
            int[] actionParams,
            bool autoSkip = true )
        {
            DoExecuteProcess( processId, actionType, actionParams, autoSkip );
        }

        public static void SkipProcessTo( Identifiable< Process, int >.Identifier procId, State state )
        {
            DoSkipProcessTo( procId, state );
        }

        // ===================================================================================== []
        // Members
        public static Member FindMember( Identifiable< Case, int >.Identifier caseId, int memberId )
        {
            return DoFindMember( caseId, memberId );
        }
    }
}