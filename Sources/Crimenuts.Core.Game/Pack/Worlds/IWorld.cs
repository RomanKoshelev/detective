// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// IWorld.cs

using System.Collections.Generic;

namespace Crimenuts.Core.Game.Pack.Worlds
{
    public interface IWorld
    {
        List< Person.Person > Persons { get; set; }
        string Name { get; set; }
        double MurdererRate { get; set; }
        double EvidenceRate { get; set; }

        IList< Person.Person > SelectRandomPersons( int personNum );
        Person.Person FindPerson( string name );
    }
}