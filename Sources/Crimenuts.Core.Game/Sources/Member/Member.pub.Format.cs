// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Member.pub.Format.cs
// Roman, 2015-03-29 12:57 AM

using Crimenuts.Utils;

namespace Crimenuts.Core.Game
{
    public partial class Member
    {
        public static implicit operator string( Member member )
        {
            return member.ToString();
        }

        public override string ToString()
        {
            return Name;
        }

        public string ShortName( int length )
        {
            return Name.SubstringSafe( 0, length );
        }

        public string ShortInfoName( int length )
        {
            return string.Format( "{0}:{1}",
                IsActive
                    ? string.Format( "{0,2}", Number )
                    : IsVictim
                        ? "xI"
                        : IsPrisoner ? ( IsMurderer ? "#M" : "#I" ) : "ERROR",
                Name.SubstringSafe( 0, length )
                );
        }
    }
}