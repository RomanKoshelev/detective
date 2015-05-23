// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Schema.cs

using System.Collections.Generic;
using Crimenuts.Core.Game.Enums;
using Crocodev.Common.Identifier;

namespace Crimenuts.Core.Game.Schema
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
        public static Master.Master Master { get; private set; }

        // ===================================================================================== []
        // Cases
        public static List< Case.Case > Cases { get; private set; }

        public static Case.Case FindCase( Identifiable< Case.Case, int >.Identifier caseId )
        {
            return DoFindCase( caseId );
        }

        public static Case.Case NewCase( WorldId worldId, int memberNum, int murderNum )
        {
            return DoNewCase( worldId, memberNum, murderNum );
        }

        // ===================================================================================== []
        // Processes
        public static List< Process.Process > Processes { get; private set; }

        public static Process.Process NewProcess( Case.Case gcase )
        {
            return DoNewProcess( gcase );
        }

        public static Identifiable< Process.Process, int >.Identifier NewProcess(
            Identifiable< Case.Case, int >.Identifier caseId )
        {
            return NewProcess( DoFindCase( caseId ) ).Id;
        }

        public static Process.Process FindProcess( Identifiable< Process.Process, int >.Identifier processId )
        {
            return DoFindProcess( processId );
        }

        public static void ExecuteProcess(
            Identifiable< Process.Process, int >.Identifier processId,
            Process.Process.UserAction.ActionType actionType,
            int[] actionParams,
            bool autoSkip = true )
        {
            DoExecuteProcess( processId, actionType, actionParams, autoSkip );
        }

        public static void SkipProcessTo( Identifiable< Process.Process, int >.Identifier procId, State state )
        {
            DoSkipProcessTo( procId, state );
        }

        // ===================================================================================== []
        // Members
        public static Member.Member FindMember( Identifiable< Case.Case, int >.Identifier caseId, int memberId )
        {
            return DoFindMember( caseId, memberId );
        }
    }
}