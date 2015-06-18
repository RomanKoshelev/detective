// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pub.Relation.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        public bool Loves( Member subj )
        {
            return Person.Love( subj.Person );
        }

        public bool Hates( Member subj )
        {
            return Person.Hate( subj.Person );
        }

        public bool Ignores( Member subj )
        {
            return Person.Ignore( subj.Person );
        }

        public bool LovesOrHates( Member subj )
        {
            return subj != this && ( Loves( subj ) || Hates( subj ) );
        }

        public bool LovesAny( IList< Member > subjects )
        {
            return subjects.Any( Loves );
        }

        public bool LovesOrHatesAny( IList< Member > members )
        {
            return LovesAny( members ) || HatesAny( members );
        }

        public bool HatesAny( IList< Member > subjects )
        {
            return subjects.Any( Hates );
        }

        public bool IgnoresAny( IList< Member > subjects )
        {
            return subjects.Any( Ignores );
        }

        public Relation GetRelationTo( Member subject )
        {
            return Ignores( subject )
                ? Relation.Ignore
                : Loves( subject )
                    ? Relation.Love
                    : Hates( subject )
                        ? Relation.Hate
                        : Relation.Error;
        }
    }
}