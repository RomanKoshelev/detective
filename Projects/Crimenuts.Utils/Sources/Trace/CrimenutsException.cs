// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// CrimenutsException.cs
// Roman, 2015-03-29 12:57 AM

using System;

namespace Crimenuts.Utils
{
    public class CrimenutsException : Exception
    {
        public CrimenutsException( string format, params object[] args )
            : base( string.Format( format, args ) ) {}
    }
}