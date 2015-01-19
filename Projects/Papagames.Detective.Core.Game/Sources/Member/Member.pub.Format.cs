using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        public static implicit operator string(Member member)
        {
            return member.ToString();
        }

        public override string ToString()
        {
            return Name;
        }

        public string ShortName(int length)
        {
            return Name.SubstringSafe(0, length);
        }

        public string ShortInfoName(int length)
        {
            return string.Format("{0}:{1}",
                IsActive
                    ? string.Format("{0,2}", Id)
                    : IsVictim
                        ? "xI"
                        : IsPrisoner ? (IsMurderer ? "#M" : "#I") : "ERROR",
                Name.SubstringSafe(0, length)
                );
        }
    }
}