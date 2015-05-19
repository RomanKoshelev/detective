// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Member.pvt.Utils.cs
// Roman, 2015-03-29 12:57 AM

using Crimenuts.Utils;

namespace Crimenuts.Core.Game
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