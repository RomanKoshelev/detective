using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        private Process Process { get; set; }
        private Case Case { get; set; }

        private Role DoGetOpenRole()
        {
            Assert.NotNull(Process,"Process is null");
            return Master.GetOpenRole(Case, this, Process.State);
        }

        private Role DoGetRole()
        {
            if (IsDetective) 
                return Role.Detective;
            if (IsMurderer) 
                return Role.Murderer;
            return Role.Innocent;
        }
    }
}