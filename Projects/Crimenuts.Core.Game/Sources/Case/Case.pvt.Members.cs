﻿using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game
{
    public partial class Case
    {
        private void InitMembers()
        {
            CreateDetective();
            CreateMembers();
            AssignMurderers();
        }

        private void CreateDetective()
        {
            const int detectiveNumber = -1;

            Detective = new Member(
                this,
                detectiveNumber, 
                new Person(new Profile(ProfileType.Detective)) {Name = "Detective"}
                );
        }

        private void AssignMurderers()
        {
            Members.SelectRandomList(MurderersNum).ForEach(m => m.IsMurderer = true);
        }

        private void CreateMembers()
        {
            Members = new List<Member>();
            World.SelectRandomPersons(MembersNum)
                .Index()
                .ForEach(numPerson => Members.Add(new Member(this, numPerson.Key + 1, numPerson.Value)));
        }

        public IList<Member> CloneMembersForProcess()
        {
            var clones = new List<Member>();
            
            Members.ForEach(m => clones.Add(new Member(m)));
            return clones;
        }

        private Member DoFindMember(int number)
        {
            return Members.First(m=>m.Number == number);
        }

        private int? DoGetMurderersOpenNum()
        {
            return Master.GetMurderersOpenNum(this, Murderers.Count);
        }
    }
}