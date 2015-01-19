using System;
using System.Collections.Generic;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class CaseModel
    {
        // ===================================================================================== []
        // Publice
        public string WorldName = "";
        
        public IList<string> Actives = new List<string>();
        public IList<string> Victims = new List<string>();
        public IList<string> Prisons = new List<string>();

        public int Id=0;
        public int MemberNum=0;
        public int MurdererNum=0;
        
        public CaseModel(int id)
        {
            Id = id;
            Case = Schema.FindCase(id);
        }

        // ===================================================================================== []
        // Pivate
        private Case Case { get; set; }

    }
}