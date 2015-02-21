using MoreLinq;

namespace Crimenuts.Utils
{
    public class Test
    {
        public static string HelloWorld()
        {
            var list = new string[] {"Hello", "World", "From", "Detective", "Core"};
            var res = "";
            
            list.ForEach(s=>res=res+" " + s);

            return res;
        }
    }
}
