﻿using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Publice
        public int Id
        {
            get { return Member.Id; }
        }
        public int CaseId
        {
            get { return Member.CaseId; }
        }
        public string Name
        {
            get { return Member.Name; }
        }
        public MemberModel(int caseId, int memberId)
        {
            Member = Schema.FindMember(caseId, memberId);
        }
        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }
    }
}