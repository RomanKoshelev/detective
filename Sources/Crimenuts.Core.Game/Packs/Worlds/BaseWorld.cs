// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// BaseWorld.cs

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Persons;
using Crimenuts.Utils;
using Crimenuts.Utils.Localization;
using MoreLinq;

namespace Crimenuts.Core.Game.Packs.Worlds
{
    public abstract class BaseWorld : IWorld
    {
        #region Implementation

        // ===================================================================================== []
        public List< Person > Persons { get; set; }
        public string Name { get; set; }
        public virtual double MurdererRate { get; set; }
        public virtual double EvidenceRate { get; set; }

        public IList< Person > SelectRandomPersons( int personNum )
        {
            Trace.Assert( personNum <= Persons.Count, "Insufficient person number" );
            return Persons.SelectRandomList( personNum );
        }

        public Person FindPerson( string name )
        {
            var person = Persons.Find( p => p.Name == name );
            Trace.Assert( person != null, string.Format( "Unknown person [{0}]", name ) );
            return person;
        }

        // ===================================================================================== []

        #endregion


        #region Tools

        // ===================================================================================== []
        protected IList< Profile.Profile > Profiles;

        protected BaseWorld( string name, IList< Profile.Profile > profiles )
        {
            Name = name;
            Profiles = profiles;
            LoadContent();
        }

        protected void LoadContent()
        {
            LoadPersons();
            LoadSettings();
            LoadRelations();
        }

        protected void LoadDefaultSettings()
        {
            EvidenceRate = Pack.Pack.EvidenceRate;
            MurdererRate = Pack.Pack.MurdererRate;
        }

        protected Person CreatePerson( ProfileType type, string name )
        {
            var profile = Profiles[ ( int ) type ];
            return new Person( profile ) {
                Name = name
            };
        }

        protected Person NormalPerson( string name )
        {
            Trace.Assert( Persons.NotExists( p => p.Name == name ), "Person already exists" );

            var person = CreatePerson( ProfileType.Normal, name );
            person.Call( Lang.En, person.Name );

            Persons.Add( person );
            return person;
        }

        protected void OthersHate( string subNames )
        {
            var subject = FindPerson( subNames );
            Persons.Where( p => p.Ignore( subject ) ).ForEach( p => p.WouldHate( subject ) );
        }

        protected void OthersLove( string subNames )
        {
            var subject = FindPerson( subNames );
            Persons.Where( p => p.Ignore( subject ) ).ForEach( p => p.WouldLove( subject ) );
        }

        // ===================================================================================== []

        #endregion


        #region Overrides

        // ===================================================================================== []

        protected abstract void LoadSettings();
        protected abstract void LoadPersons();
        protected abstract void LoadRelations();

        // ===================================================================================== []

        #endregion
    }
}