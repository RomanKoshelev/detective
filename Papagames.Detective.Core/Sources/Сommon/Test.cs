using MoreLinq;

namespace Papagames.Detective.Core
{
    public class Test
    {
        public static string HelloWorld()
        {
            var list = new string[] {"Hello", "World"};
            var res = "";
            
            list.ForEach(s=>res=res+" " + s);

            return res;
        }
    }
}
