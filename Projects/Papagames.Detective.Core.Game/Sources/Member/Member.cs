using System.Collections.Generic;
using System.Linq;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        public Member(int number, Person person)
        {
            Person = person;
            Number = number;
            IsMurderer = false;
            IsVictim = false;
            IsPrisoner = false;

            InitDecisionModules();
        }

        public Person Person { get; set; }
        public int Number { get; set; }

        public string Name
        {
            get { return Person.Name; }
        }

        public bool IsMurderer { get; set; }
        public bool IsVictim { get; set; }
        public bool IsPrisoner { get; set; }

        public bool IsInnocent
        {
            get { return !IsMurderer; }
        }

        public bool IsActive
        {
            get { return !IsPrisoner && !IsVictim; }
        }

        public bool IsActiveMurderer
        {
            get { return IsActive && IsMurderer; }
        }

        public bool IsDetective
        {
            get { return Person.IsDetective; }
        }
    }
}