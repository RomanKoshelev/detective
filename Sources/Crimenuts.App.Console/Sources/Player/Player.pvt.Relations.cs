// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Player.pvt.Relations.cs
// Roman, 2015-03-29 12:55 AM

using System;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Member;
using MoreLinq;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        private void PrintRelations()
        {
            if( SilenceMode ) {
                return;
            }

            WriteLine( "Relations" );

            Members.ForEach( m => {
                WriteLine( "  {0}", m.Name );
                if( m.LovesAny( Members ) ) {
                    PrintRelationSubjects( "Loves: ", Members, m.Loves );
                }
                if( m.HatesAny( Members ) ) {
                    PrintRelationSubjects( "Hates: ", Members, m.Hates );
                }
                if( !m.LovesOrHatesAny( Members ) ) {
                    WriteLine( "    Ignores all" );
                }
            } );
        }

        private void PrintRelationSubjects(
            string text,
            IEnumerable< Member > subjects,
            Func< Member, bool > predicate )
        {
            WriteLine( "    {0}{1}",
                text,
                subjects.Where( predicate ).Select( s => s.Name ).Aggregate( ( res, name ) => res + ", " + name ) );
        }
    }
}