// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pvt.Utils.cs

using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Masters;
using Crimenuts.Core.Game.Processes;
using Crimenuts.Utils;
using Crimenuts.Utils.Traces;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        private Process Process { get; set; }
        private Case Case { get; set; }

        private Role DoGetOpenRole()
        {
            CrimenutsAssert.NotNull( Process, "Process is null" );
            return Master.GetOpenRole( Case, this, Process.State );
        }

        private Role DoGetRole()
        {
            if( IsDetective ) {
                return Role.Detective;
            }
            if( IsMurderer ) {
                return Role.Murderer;
            }
            return Role.Innocent;
        }
    }
}