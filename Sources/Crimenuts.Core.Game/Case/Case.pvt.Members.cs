// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Case.pvt.Members.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Pack.Profile;
using Crimenuts.Utils;
using MoreLinq;

namespace Crimenuts.Core.Game.Case
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

            Detective = new Member.Member(
                this,
                detectiveNumber,
                new Person.Person( new Profile( ProfileType.Detective ) ) { Name = "Detective" }
                );
        }

        private void AssignMurderers()
        {
            Members.SelectRandomList( MurderersNum ).ForEach( m => m.IsMurderer = true );
        }

        private void CreateMembers()
        {
            Members = new List< Member.Member >();
            World.SelectRandomPersons( MembersNum )
                .Index()
                .ForEach( numPerson => Members.Add( new Member.Member( this, numPerson.Key + 1, numPerson.Value ) ) );
        }

        public IList< Member.Member > CloneMembersForProcess()
        {
            var clones = new List< Member.Member >();

            Members.ForEach( m => clones.Add( new Member.Member( m ) ) );
            return clones;
        }

        private Member.Member DoFindMember( int number )
        {
            return Members.First( m => m.Number == number );
        }

        private int? DoGetMurderersOpenNum()
        {
            return Master.Master.GetMurderersOpenNum( this, Murderers.Count );
        }
    }
}