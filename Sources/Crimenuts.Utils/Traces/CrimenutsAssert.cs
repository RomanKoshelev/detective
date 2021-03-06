// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// CrimenutsAssert.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Utils.Traces
{
    public static class CrimenutsAssert
    {
        public static void NotNull( object obj, string format, params object[] args )
        {
            if( obj == null ) {
                throw new CrimenutsException( format, args );
            }
        }

        public static void IsTrue( bool condition, string format, params object[] args )
        {
            if( !condition ) {
                throw new CrimenutsException( format, args );
            }
        }

        public static void Equal( object o1, object o2, string format, params object[] args )
        {
            if( !o1.Equals( o2 ) ) {
                throw new CrimenutsException( format, args );
            }
        }

        public static void Equal( object o1, object o2 )
        {
            Equal( o1, o2, "Objects [{0}] are not equal: [{1}] != [{2}]", o1.GetType().ToString(), o1, o2 );
        }
    }
}