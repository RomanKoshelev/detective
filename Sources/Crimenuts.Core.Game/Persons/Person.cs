// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Person.cs

using System.Collections.Generic;
using System.Diagnostics;
using Crimenuts.Core.Game.Packs.Profile;
using Crimenuts.Utils;
using Crimenuts.Utils.Localization;
using MoreLinq;

namespace Crimenuts.Core.Game.Persons
{
    public class Person
    {
        private readonly List< Person > _hatePersons = new List< Person >();
        private readonly List< Person > _lovePersons = new List< Person >();

        public Person( Profile profile, Sex sex = Sex.Male )
        {
            Profile = profile;
            Sex = sex;
        }

        public string Name { set; get; }
        public Profile Profile { set; get; }
        public Sex Sex { get; set; }

        public bool IsDetective
        {
            get { return Profile.IsDetective; }
        }

        public bool Love( Person person )
        {
            return _lovePersons.Exists( p => p == person );
        }

        public bool Hate( Person person )
        {
            return _hatePersons.Exists( p => p == person );
        }

        public bool Ignore( Person person )
        {
            return this != person && !Love( person ) && !Hate( person );
        }

        public void WouldLove( IList< Person > persons )
        {
            persons.ForEach( WouldLove );
        }

        public void WouldHate( IList< Person > persons )
        {
            persons.ForEach( WouldHate );
        }

        public void WouldHate( Person subject )
        {
            Trace.Assert( Ignore( subject ), Name + ":" + subject.Name );
            _hatePersons.Add( subject );
        }

        public void WouldLove( Person subject )
        {
            Trace.Assert( Ignore( subject ), Name + ":" + subject.Name );
            _lovePersons.Add( subject );
        }

        public Person Call( Lang lang, string langName )
        {
            Localizator.Set( Name ).Set( lang, langName );
            return this;
        }

        public Person Russian( string name )
        {
            return Call( Lang.Ru, name );
        }

        public Person Female()
        {
            return SetSex( Sex.Female );
        }

        public Person Male()
        {
            return SetSex( Sex.Female );
        }

        public Person SetSex( Sex sex )
        {
            Sex = sex;
            return this;
        }
    }
}