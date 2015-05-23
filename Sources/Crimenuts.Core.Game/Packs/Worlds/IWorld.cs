// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// IWorld.cs

using System.Collections.Generic;
using Crimenuts.Core.Game.Persons;

namespace Crimenuts.Core.Game.Packs.Worlds
{
    public interface IWorld
    {
        List< Person > Persons { get; set; }
        string Name { get; set; }
        double MurdererRate { get; set; }
        double EvidenceRate { get; set; }

        IList< Person > SelectRandomPersons( int personNum );
        Person FindPerson( string name );
    }
}