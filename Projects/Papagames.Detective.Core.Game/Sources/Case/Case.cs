using System;
using System.Collections.Generic;
using System.Linq;

namespace Papagames.Detective.Core.Game
{
    public partial class Case
    {
        public Case(IWorld world, int memberNum, int murdererNum)
        {
            World = world;
            MemberNum = memberNum;
            MurdererNum = murdererNum;

            Init();
        }

        public int Id { get; set; }
        public int MurdererNum { get; set; }

        public static int CalcMaxMurdersNum(int membersNum)
        {
            return (int) Math.Floor((membersNum - 1.0)/2.0);
        }

        public int MemberNum { get; set; }

        public IWorld World { get; set; }
        public IList<Member> Members { get; set; }

        public Member Detective { get; set; }

        public string WorldName
        {
            get { return World.Name; }
        }

        public IList<Member> ActiveMembers
        {
            get { return Members.Where(m => m.IsActive).ToList(); }
        }

        public Member FindMember(int memberId)
        {
            return DoFindMember(memberId);
        }
    }
}