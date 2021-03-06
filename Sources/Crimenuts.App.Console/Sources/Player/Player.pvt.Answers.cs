﻿// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Player.pvt.Answers.cs
// Roman, 2015-03-29 12:55 AM

using System.Diagnostics;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;
using MoreLinq;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        private void PrintAnswers( bool isGameOver = false )
        {
            if( SilenceMode ) {
                return;
            }

            const string nameCellFormat = "  {0,-16}";
            const string answerCellFormat = "{0,-28}";

            PrintAnswersHeader( History, nameCellFormat, answerCellFormat );

            Members.Where( m => m.IsActive || History.Records.Exists( r => r.Agent == m && r.Action == Action.Answer ) )
                .OrderBy( m => !m.IsActive ? -1 : m.Number )
                .ForEach( m => {
                    Write( nameCellFormat, string.Format( "  {0,2}{1}", NumberOrFullState( m ), m.ShortName( 12 ) ) );

                    History.Days.Reverse().ForEach( day => {
                        var rec =
                            History.Records.FirstOrDefault(
                                r => r.Agent == m && r.Action == Action.Answer && r.Day == day );
                        Write( answerCellFormat, FormatAnswer( rec, m, isGameOver ) );
                    } );

                    WriteLine();
                } );
        }

        private object FormatAnswer( History.Record rec, Member member, bool isGameOver )
        {
            return string.Format( "{0,-11}",
                rec == null
                    ? member.IsActive ? "   ?" : "   -"
                    : FormatAnswerSubjectName( rec, isGameOver ) + " is " + rec.AnswerCode );
        }

        private static string FormatAnswerSubjectName( History.Record rec, bool isGameOver )
        {
            return InactiveMarker( rec.Subject, isGameOver ) + string.Format( "{0,-6}", rec.Subject.ShortName( 6 ) );
        }

        private static string InactiveMarker( Member subject, bool isGameOver )
        {
            return ( subject.IsActive && !isGameOver )
                ? "   "
                : subject.IsMurderer ? " M " : subject.IsInnocent ? " I " : "ERROR";
        }

        private static string NumberOrState( Member m )
        {
            return m.IsActive
                ? string.Format( "{0,2}:", m.Number )
                : m.IsInnocent ? "   " : m.IsMurderer ? " M " : "ERROR";
        }

        private void PrintAnswersHeader( History history, string indentFormat, string cellFormat )
        {
            Write( indentFormat, "Answers" );
            history.Days.Reverse().ForEach( d => Write( cellFormat, string.Format( " Day:{0}", d ) ) );
            WriteLine();
        }

        public void PrintAnswerWithAdverb( Member respondent, Member subject, AnswerCode answerCode )
        {
            if( SilenceMode ) {
                return;
            }
            var verb = "";

            if( subject == respondent ) {
                verb = "";
            } else {
                switch( answerCode ) {
                    case AnswerCode.Unknown :
                        verb = SelectOnRelation( respondent, subject, "is truly", "is fucking", "" );
                        break;

                    case AnswerCode.Suspicious :
                        verb = SelectOnRelation( respondent, subject, "is slightly", "is very", "" );
                        break;
                    case AnswerCode.NotSuspicious :
                        verb = SelectOnRelation( respondent, subject, "is certainly", "is strangely", "" );
                        break;

                    case AnswerCode.Innocent :
                        verb = SelectOnRelation( respondent, subject, "is absolutely", "may be", "" );
                        break;
                    case AnswerCode.Murderer :
                        verb = SelectOnRelation( respondent, subject, "seems", "is goddamn", "" );
                        break;
                }
            }
            PrintAnswer( respondent, subject, answerCode, verb );
        }

        private static string SelectOnRelation(
            Member respondent,
            Member subject,
            string love,
            string hate,
            string ignore )
        {
            return respondent.Loves( subject ) ? love : respondent.Hates( subject ) ? hate : ignore;
        }

        private void PrintAnswer( Member respondent, Member subject, AnswerCode answerCode, string verb = "" )
        {
            Trace.Assert( subject != respondent, "subject != respondent" );
            if( verb == "" ) {
                verb = "is";
            }

            WriteLine( "    {0}:{1} {2} {3}", subject.Number, subject.Name, verb, answerCode );
            WriteLine();
        }
    }
}