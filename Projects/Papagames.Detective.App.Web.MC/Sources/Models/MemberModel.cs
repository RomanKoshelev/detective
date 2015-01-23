﻿using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Public
        public int Number
        {
            get { return Member.Number; }
        }
        public int CaseId
        {
            get { return Member.CaseId; }
        }
        public string Name
        {
            get { return Member.Name; }
        }
        public MemberModel(Case.Identifier caseId, int memberId)
        {
            Member = Schema.FindMember(caseId, memberId);
        }
        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }
    }
}