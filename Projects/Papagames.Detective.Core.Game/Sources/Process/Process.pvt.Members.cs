using System;
using System.Collections.Generic;
using System.Linq;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private List<Member> DoGetActiveMembers()
        {
            return Members.Where(m => m.IsActive).ToList();
        }

        private List<Member> DoGetActiveMurderers()
        {
            return ActiveMembers.Where(m => m.IsMurderer).ToList();
        }

        private List<Member> DoGetActiveInnocents()
        {
            return ActiveMembers.Where(m => !m.IsMurderer).ToList();
        }
        private IList<Member> DoGetVictims()
        {
            return Members.Where(m => m.IsVictim).ToList();
        }
        private IList<Member> DoGetPrisoners()
        {
            return Members.Where(m => m.IsPrisoner).ToList();
        }
        private Member Detective
        {
            get { return Case.Detective; }
        }

        private void InitMembers()
        {
            Members = Case.CloneMembers();
        }

    }
}