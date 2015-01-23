using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Case
    {
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

        private Member DoFindMember(int number)
        {
            return Members.First(m=>m.Number == number);
        }
    }
}