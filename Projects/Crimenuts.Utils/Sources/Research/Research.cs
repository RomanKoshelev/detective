// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// Research.cs
// Roman, 2015-03-29 12:57 AM

using MoreLinq;

namespace Crimenuts.Utils
{
    public class Research
    {
        public static string HelloWorld()
        {
            var list = new string[] { "Hello", "World", "From", "Detective", "Core" };
            var res = "";

            list.ForEach( s => res = res + " " + s );

            return res;
        }
    }
}