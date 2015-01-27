using System.Collections.Generic;
using System.Linq;
using MoreLinq;

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
            Members = Case.CloneMembersForProcess();
            Members.ForEach(m=>m.SetProcess(this));
        }

        private Member FindMember(int number)
        {
            return Members.First(m => m.Number == number);
        }

        private int? DoGetActiveMurderersOpenNum()
        {
            return Schema.Master.GetActiveMurderersOpenNum(Case, ActiveMurderers.Count);
        }

        private void UpdateMembersLastActiviryDay()
        {
            ActiveMembers.ForEach(m => m.LastActivityDay = CurrentDay);
        }
    }
}