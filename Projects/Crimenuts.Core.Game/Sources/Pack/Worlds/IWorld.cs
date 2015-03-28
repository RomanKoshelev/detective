// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// IWorld.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;

namespace Crimenuts.Core.Game
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