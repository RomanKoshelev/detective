using System.Collections.Generic;

namespace Papagames.Detective.App.Web.Models
{
    public class Case
    {
        public string WorldName="";
        
        public IList<string> Actives = new List<string>();
        public IList<string> Victims = new List<string>();
        public IList<string> Prisons = new List<string>();

        public int MemberNum=0;
        public int MurdererNum=0;
     }
}