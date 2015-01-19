using Papagames.Detective.Core.Game;
using Member = Microsoft.Ajax.Utilities.Member;

namespace Papagames.Detective.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Publice
        public string Name
        {
            get { return Member.Name; }
        }
        public MemberModel(int caseId, int memberId)
        {
            //Member = Schema.FindMember(caseId, memberId);
        }
        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }
    }
}