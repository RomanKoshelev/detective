// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// RandomWorld.cs

using System;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Pack.Utils.NameGenerator;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game.Pack.Worlds
{
    public sealed class RandomWorld : BaseWorld
    {
        public RandomWorld( IList< Profile.Profile > profiles )
            : base( "Random", profiles ) {}

        private const double RelationRate = 0.6;
        private const int RandomSeed = 100;
        private const int RandomPersonNum = 24;
        private static readonly Random Random = new Random( RandomSeed );
        private static readonly NameGenerator NameGenerator = new NameGenerator( Random );

        protected override void LoadSettings()
        {
            LoadDefaultSettings();
        }

        protected override void LoadPersons()
        {
            Persons = new List< Person.Person >();
            int i;
            for( i = 0; i < RandomPersonNum; i++ ) {
                var person = new Person.Person( Profiles[ ( int ) RandomProfileType() ] ) {
                    Name = NameGenerator.MakeFirstName()
                };
                Persons.Add( person );
            }
        }

        protected override void LoadRelations()
        {
            var relNum = ( int ) Math.Ceiling( Persons.Count*RelationRate/2 );
            Persons.ForEach( person => person.WouldLove( RandomPersonsIgnoredBy( person, relNum ) ) );
            Persons.ForEach( person => person.WouldHate( RandomPersonsIgnoredBy( person, relNum ) ) );
        }

        private List< Person.Person > RandomPersonsIgnoredBy( Person.Person person, int num )
        {
            return Persons.Where( p => p != person && person.Ignore( p ) ).SelectRandomListUsing( num, Random );
        }

        private static ProfileType RandomProfileType()
        {
            return ProfileType.Normal;

            //return (ProfileType) Random.Next((int)ProfileType.Normal, (int)ProfileType.Enemy + 1);
        }
    }
}