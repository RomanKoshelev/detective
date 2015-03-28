﻿// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Member.pub.Relation.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;
using System.Linq;

namespace Crimenuts.Core.Game
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
    }
}