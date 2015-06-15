// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Case.pvt.Members.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Masters;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Packs.Profile;
using Crimenuts.Core.Game.Persons;
using Crimenuts.Utils;
using MoreLinq;

namespace Crimenuts.Core.Game.Cases
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
                new Person( new Profile( ProfileType.Detective ) ) {
                    Name = "Detective"
                }
                );
        }

        private void AssignMurderers()
        {
            Members.SelectRandomList( MurderersNum ).ForEach( m => m.IsMurderer = true );
        }

        private void CreateMembers()
        {
            Members = new List< Member >();
            World.SelectRandomPersons( MembersNum )
                .Index()
                .ForEach( numPerson => Members.Add( new Member( this, numPerson.Key + 1, numPerson.Value ) ) );
        }

        public IList< Member > CloneMembersForProcess()
        {
            var clones = new List< Member >();

            Members.ForEach( m => clones.Add( new Member( m ) ) );
            return clones;
        }

        private Member DoFindMember( int number )
        {
            return Members.First( m => m.Number == number );
        }

        private int? DoGetMurderersOpenNum()
        {
            return Master.GetMurderersOpenNum( this, Murderers.Count );
        }
    }
}