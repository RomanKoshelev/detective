using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class CaseModel
    {
        // ===================================================================================== []
        // Publice
        public string WorldName
        {
            get { return Case.WorldName; }
        }

        public IList<string> ActiveMemberNames { get { return DoGEtActiveMemberNames(); }}

        public IList<string> Victims = new List<string>();
        public IList<string> Prisons = new List<string>();

        public int Id
        {
            get { return Case.Id; }
        }

        public int MemberNum
        {
            get { return Case.MemberNum; }
        }

        public int MurdererNum
        {
            get { return Case.MurdererNum; }
        }

        public CaseModel(int id)
        {
            Case = Schema.FindCase(id);
        }

        // ===================================================================================== []
        // Pivate
        private Case Case { get; set; }
        public MemberModel FirstVictim { get; set; }

        private IList<string> DoGEtActiveMemberNames()
        {
            return Case.ActiveMembers.Select(m=>m.Name).ToList();
        }
    }
}