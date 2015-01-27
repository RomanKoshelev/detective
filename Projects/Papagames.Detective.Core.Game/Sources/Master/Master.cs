using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public class Master
    {
        public Role GetOpenRole(IOptions options, Member member, State state)
        {
            if (state==State.Finished)
                return member.Role;

            if (member.IsActive)
                return Role.Unknown;

            if (member.IsPrisoner && options.PrisonerRoleIsOpen)
                return member.Role;

            if (member.IsVictim && options.VictimRoleIsOpen)
                return member.Role;

            if (member.IsDetective)
                return member.Role;

            throw new DetectiveException("Can't get Role for {0}", member.Name);
        }

        public int? GetActiveMurderersOpenNum(IOptions options, int num)
        {
            if (options.MurderersNumIsOpen && options.VictimRoleIsOpen && options.PrisonerRoleIsOpen)
                return num;
            return null;
        }
        public int? GetMurderersOpenNum(IOptions options, int num)
        {
            if (options.MurderersNumIsOpen)
                return num;
            return null;
        }
    }
}