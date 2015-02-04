using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        public Member(Case gcase, int number, Person person)
        {
            Case = gcase;
            Person = person;
            Number = number;
            IsMurderer = false;
            IsVictim = false;
            IsPrisoner = false;
            InitDecisionModules();
        }

        public Member(Member member)
            : this(member.Case, member.Number, member.Person)
        {
            IsMurderer = member.IsMurderer;
        }

        public Person Person { get; private set; }
        public int Number { get; private set; }

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

        public void SetProcess(Process process)
        {
            Process = process;
        }
    }
}