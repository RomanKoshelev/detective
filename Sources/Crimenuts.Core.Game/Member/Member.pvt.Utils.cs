// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pvt.Utils.cs

using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game.Member
{
    public partial class Member
    {
        private Process.Process Process { get; set; }
        private Case.Case Case { get; set; }

        private Role DoGetOpenRole()
        {
            CrimenutsAssert.NotNull( Process, "Process is null" );
            return Master.Master.GetOpenRole( Case, this, Process.State );
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