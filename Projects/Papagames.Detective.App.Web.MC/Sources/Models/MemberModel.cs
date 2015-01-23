using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Public
        public MemberModel(Case.Identifier caseId, int memberId)
        {
            Member = Schema.FindMember(caseId, memberId);
        }

        public int Number
        {
            get { return Member.Number; }
        }

        public string Name
        {
            get { return Member.Name; }
        }

        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }
    }
}