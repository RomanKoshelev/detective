// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.cs

using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Persons;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        public Member( Case gcase, int number, Person person )
        {
            Case = gcase;
            Person = person;
            Number = number;
            IsMurderer = false;
            IsVictim = false;
            IsPrisoner = false;
            Annotation = AnswerCode.Unknown;
            InitDecisionModules();
        }

        public Member( Member member )
            : this( member.Case, member.Number, member.Person )
        {
            IsMurderer = member.IsMurderer;
        }

        public Person Person { get; private set; }
        public int Number { get; private set; }

        public string Name
        {
            get { return Person.Name; }
        }
        public AnswerCode Annotation { get; set; }

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

        public Role OpenRole
        {
            get { return DoGetOpenRole(); }
        }

        public Role Role
        {
            get { return DoGetRole(); }
        }

        public int LastActivityDay { get; set; }

        public bool IsOpenMurderer
        {
            get { return OpenRole == Role.Murderer; }
        }

        public bool IsOpenInnocent
        {
            get { return OpenRole == Role.Innocent; }
        }

        public string World
        {
            get { return Process.Case.World.Name; }
        }

        public void SetProcess( Process process )
        {
            Process = process;
        }
    }
}