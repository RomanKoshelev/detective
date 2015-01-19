using System;
using System.Collections.Generic;
using MoreLinq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Case
    {
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
        
        private void Init()
        {
            CreateDetective();
            CreateMembers();
            AssignMurderers();
        }

        private void CreateDetective()
        {
            const int detectiveNumber = -1;

            Detective = new Member(detectiveNumber, new Person(new Profile(ProfileType.Detective)) {Name = "Detective"});
        }

        private void AssignMurderers()
        {
            Members.SelectRandomList(MurdererNum).ForEach(m => m.IsMurderer = true);
        }

        private void CreateMembers()
        {
            Members = new List<Member>();
            World.SelectRandomPersons(MemberNum)
                .Index()
                .ForEach(numPerson => Members.Add(new Member(numPerson.Key + 1, numPerson.Value)));
        }

        public IList<Member> CloneMembers()
        {
            var clones = new List<Member>();
            
            Members.ForEach(m => clones.Add(new Member(m.Number, m.Person){IsMurderer = m.IsMurderer}));
            return clones;
        }
    }
}