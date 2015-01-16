using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using MoreLinq;

namespace Papagames.Detective.Core.Game
{
    internal static class WorldExtension
    {
        private static IWorld _world;

        public static IWorld World
        {
            get
            {
                Trace.Assert(_world!=null,"Unusigned IWorld");
                return _world; 
            }
            set { _world = value; }
        }

        public static Person Love(this Person person, params string[] subNames)
        {
            if (subNames != null) 
                person.WouldLove(subNames.Select(World.FindPerson).ToList());
            return person;
        }
        public static Person Love(this string name, params string[] subNames)
        {
            return World.FindPerson(name).Love(subNames);
        }
        public static Person Hate(this Person person, params string[] subNames)
        {
            if (subNames != null) 
                person.WouldHate(subNames.Select(World.FindPerson).ToList());
            return person;
        }
        public static Person Hate(this string name, params string[] subNames)
        {
            return World.FindPerson(name).Love(subNames);
        }
        public static Person IsHatedByOthers(this string name)
        {
            return World.FindPerson(name).IsHatedByOthers();
        }
        public static Person IsHatedByOthers(this Person person)
        {
            World.Persons.Where(p => p.Ignore(person)).ForEach(p => p.WouldHate(person));
            return person;
        }
        public static Person IsLovedByOthers(this Person person)
        {
            World.Persons.Where(p => p.Ignore(person)).ForEach(p => p.WouldLove(person));
            return person;
        }
        public static Person LoveOthers(this Person person)
        {
            World.Persons.Where(person.Ignore).ForEach(person.WouldLove);
            return person;
        }
        public static Person HateOthers(this Person person)
        {
            World.Persons.Where(person.Ignore).ForEach(person.WouldHate);
            return person;
        }
    }
}