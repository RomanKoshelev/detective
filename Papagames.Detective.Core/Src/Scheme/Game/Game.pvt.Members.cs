using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;

namespace Papagames.Detective.Core
{
    public partial class Game
    {
        #region Implementation

        // ===================================================================================== []

        private List<Member> DoGetActiveMembers()
        {
            return (from m in Members where m.IsActive select m).ToList();
        }

        private List<Member> DoGetActiveMurderers()
        {
            return (from m in ActiveMembers where m.IsMurderer select m).ToList();
        }

        private List<Member> DoGetActiveInnocents()
        {
            return (from m in ActiveMembers where !m.IsMurderer select m).ToList();
        }

        private static int DoCalcMaxMurdersNum(int membersNum)
        {
            return (int) Math.Floor((membersNum - 1.0)/2.0);
        }

        // ===================================================================================== []

        #endregion

        #region Properties

        // ===================================================================================== []
        private Member Detective { get; set; }

        private int MaxMurdererNum
        {
            get
            {
                var n = (int) Math.Ceiling(Members.Count*World.MurdererRate);
                n = Math.Max(n, 1);
                n = (int) Math.Min(n, Math.Floor((Members.Count - 1.0)/2.0));
                return n;
            }
        }

        private int MaxEvidenceNum
        {
            get
            {
                var n = (int) Math.Ceiling(ActiveMembers.Count*World.EvidenceRate);
                n = Math.Max(n, 0);
                n = Math.Min(n, ActiveMembers.Count*(ActiveMembers.Count - 1));
                return n;
            }
        }

        // ===================================================================================== []

        #endregion

        #region Methods

        // ===================================================================================== []
        private void InitMembers()
        {
            Members = new List<Member>();
            Detective = CreateDetectiveMember();
        }

        private static Member CreateDetectiveMember()
        {
            const int dectiveNumber = -1;

            return new Member(dectiveNumber, new Person(new Profile(ProfileType.Detective)) {Name = "Detective"});
        }

        private void AssignMurderers(int? murderNum = null)
        {
            ActiveMembers.SelectRandomList(murderNum ?? MaxMurdererNum).ForEach(m => m.IsMurderer = true);
        }

        private void SelectMembers(int memberNum)
        {
            Members.Clear();
            World.SelectRandomPersons(memberNum)
                .Index()
                .ForEach(numPerson => Members.Add(new Member(numPerson.Key + 1, numPerson.Value)));
        }

        // ===================================================================================== []

        #endregion
    }
}