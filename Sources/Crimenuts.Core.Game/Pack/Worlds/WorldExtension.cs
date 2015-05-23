// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// WorldExtension.cs

using System.Diagnostics;
using System.Linq;
using MoreLinq;

namespace Crimenuts.Core.Game.Pack.Worlds
{
    internal static class WorldExtension
    {
        private static IWorld _world;

        public static IWorld World
        {
            get
            {
                Trace.Assert( _world != null, "Unusigned IWorld" );
                return _world;
            }
            set { _world = value; }
        }

        public static Person.Person Love( this Person.Person person, params string[] subNames )
        {
            if( subNames != null ) {
                person.WouldLove( subNames.Select( World.FindPerson ).ToList() );
            }
            return person;
        }

        public static Person.Person Love( this string name, params string[] subNames )
        {
            return World.FindPerson( name ).Love( subNames );
        }

        public static Person.Person Hate( this Person.Person person, params string[] subNames )
        {
            if( subNames != null ) {
                person.WouldHate( subNames.Select( World.FindPerson ).ToList() );
            }
            return person;
        }

        public static Person.Person Hate( this string name, params string[] subNames )
        {
            return World.FindPerson( name ).Love( subNames );
        }

        public static Person.Person IsHatedByOthers( this string name )
        {
            return World.FindPerson( name ).IsHatedByOthers();
        }

        public static Person.Person IsHatedByOthers( this Person.Person person )
        {
            World.Persons.Where( p => p.Ignore( person ) ).ForEach( p => p.WouldHate( person ) );
            return person;
        }

        public static Person.Person IsLovedByOthers( this Person.Person person )
        {
            World.Persons.Where( p => p.Ignore( person ) ).ForEach( p => p.WouldLove( person ) );
            return person;
        }

        public static Person.Person LoveOthers( this Person.Person person )
        {
            World.Persons.Where( person.Ignore ).ForEach( person.WouldLove );
            return person;
        }

        public static Person.Person HateOthers( this Person.Person person )
        {
            World.Persons.Where( person.Ignore ).ForEach( person.WouldHate );
            return person;
        }
    }
}