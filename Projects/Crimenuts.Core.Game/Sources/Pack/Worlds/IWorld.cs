using System.Collections.Generic;

namespace Crimenuts.Core.Game
{
    public interface IWorld
    {
        List<Person> Persons { get; set; }
        string Name { get; set; }
        double MurdererRate { get; set; }
        double  EvidenceRate { get; set; }

        IList<Person> SelectRandomPersons(int personNum);
        Person FindPerson(string name);
    }
}