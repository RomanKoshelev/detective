using System;

namespace Papagames.Detective.Utils
{
    public class DetectiveException : Exception
    {
        public DetectiveException(string format, params object [] args)
            :base(string.Format(format, args))
        {
        }
    }
}