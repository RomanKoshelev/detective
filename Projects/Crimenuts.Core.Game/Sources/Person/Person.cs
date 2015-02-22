using System.Collections.Generic;
using System.Diagnostics;
using Crimenuts.Utils.Localization;
using MoreLinq;

namespace Crimenuts.Core.Game
{
    public class Person
    {
        private readonly List<Person> _hatePersons = new List<Person>();
        private readonly List<Person> _lovePersons = new List<Person>();

        public Person(Profile profile)
        {
            Profile = profile;
        }

        public string Name { set; get; }
        public Profile Profile { set; get; }

        public bool IsDetective
        {
            get { return Profile.IsDetective; }
        }

        public bool Love(Person person)
        {
            return _lovePersons.Exists(p => p == person);
        }

        public bool Hate(Person person)
        {
            return _hatePersons.Exists(p => p == person);
        }

        public bool Ignore(Person person)
        {
            return this != person && !Love(person) && !Hate(person);
        }

        public void WouldLove(IList<Person> persons)
        {
            persons.ForEach(WouldLove);
        }

        public void WouldHate(IList<Person> persons)
        {
            persons.ForEach(WouldHate);
        }

        public void WouldHate(Person subject)
        {
            Trace.Assert(Ignore(subject), Name + ":" + subject.Name);
            _hatePersons.Add(subject);
        }

        public void WouldLove(Person subject)
        {
            Trace.Assert(Ignore(subject), Name+":"+subject.Name);
            _lovePersons.Add(subject);
        }

        public Person Call(Lang lang, string langName)
        {
            Localizator.Set(Name).Set(lang, langName);
            return this;
        }
    }
}