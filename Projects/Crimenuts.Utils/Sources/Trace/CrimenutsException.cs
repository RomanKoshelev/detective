using System;

namespace Crimenuts.Utils
{
    public class CrimenutsException : Exception
    {
        public CrimenutsException(string format, params object [] args)
            :base(string.Format(format, args))
        {
        }
    }
}