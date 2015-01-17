using System.Collections.Generic;

namespace Papagames.Detective.App.Web.Models
{
    public class Case
    {
        public string WorldName;
        
        public IList<string> ActiveMembers;
        public IList<string> Victims;

        public int MemberNum;
        public int MurdererNum;
     }
}