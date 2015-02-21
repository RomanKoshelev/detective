using System;

namespace Crimenuts.Utils
{
    public class DetectiveException : Exception
    {
        public DetectiveException(string format, params object [] args)
            :base(string.Format(format, args))
        {
        }
    }
}