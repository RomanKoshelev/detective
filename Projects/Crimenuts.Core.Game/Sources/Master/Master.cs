using System;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game
{
    public class Master
    {
        public static Role GetOpenRole(IOptions options, Member member, State state)
        {
            if (state == State.Finished)
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

        public static int? GetActiveMurderersOpenNum(IOptions options, int num)
        {
            return
                options.MurderersNumIsOpen && options.VictimRoleIsOpen && options.PrisonerRoleIsOpen
                    ? num
                    : (int?) null;
        }

        public static int? GetMurderersOpenNum(IOptions options, int num)
        {
            return options.MurderersNumIsOpen? num : (int?) null;
        }

        public static int MinMembersNum
        {
            get { return 3; }
        }

        public static int MaxMembersNum
        {
            get { return 12; }
        }

        public static int MinMurderersNum
        {
            get { return 1; }
        }

        public static int MaxMurderersNum(int membersNum)
        {
            return (int) Math.Floor((membersNum - 1.0)/2.0);
        }

        public static int? GetTodayEvidencesOpenNum(IOptions options, int num)
        {
            return options.EvidencesNumIsOpen? num: (int?)null;
        }
    }
}