using System.CodeDom;

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

        public Role OpenRole
        {
            get { return DoGetOpenRole(); }
        }
        public Role Role
        {
            get { return DoGetRole(); }
        }


        // ===================================================================================== []
        // todo: to utils
        private Case Case { get; set; }

        private Role DoGetOpenRole()
        {
            return Schema.Master.GetOpenRole(Case, this);
        }
        private Role DoGetRole()
        {
            if (IsDetective) 
                return Role.Detective;
            if (IsMurderer) 
                return Role.Murderer;
            return Role.Innocent;
        }
    }
}