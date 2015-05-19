// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Member.pvt.Answer.cs
// Roman, 2015-03-29 12:57 AM

using System;
using System.Diagnostics;

namespace Crimenuts.Core.Game
{
    public partial class Member
    {
        private Answer DoAsk( Member subj )
        {
            Trace.Assert( IsActive );
            Trace.Assert( this != subj );

            if( IsMurderer ) {
                if( subj.IsMurderer ) {
                    return Answer( me => me.Murderer, subj, s => s.Murderer );
                }
                if( subj.IsWitnessMurderer ) {
                    return Answer( me => me.Murderer, subj, s => s.WitnessMurderer );
                }
                return Answer( me => me.Murderer, subj, s => s.Innocent );
            }

            if( IsInnocent ) {
                if( ThinkIsMurderer( subj ) ) {
                    return Answer( me => me.WitnessMurderer, subj, s => s.Murderer );
                }
                if( ThinkIsInnocent( subj ) ) {
                    return Answer( me => me.WitnessInnocent, subj, s => s.Innocent );
                }
                return Answer( me => me.Uninformed, subj, s => s.Uninformed );
            }

            throw new Exception( "Wrong answering logic" );
        }

        private AnswerRule AnswerRule
        {
            get { return Person.Profile.AnswerRule; }
        }

        private Answer Answer(
            Func< AnswerRule, AnswerRule.MyStatus > statusSelector,
            Member subject,
            Func< AnswerRule.MyStatus.Attitude, Answer > answerSelector )
        {
            var attitudeSelector = MakeAnswerAttitudeSelector( subject );
            var answer = answerSelector( attitudeSelector( statusSelector( AnswerRule ) ) );
            Trace.Assert( answer != Game.Answer.Error, "Wrong answer" );
            return answer;
        }

        private Func< AnswerRule.MyStatus, AnswerRule.MyStatus.Attitude > MakeAnswerAttitudeSelector(
            Member subj )
        {
            if( Loves( subj ) ) {
                return status => status.Love;
            }

            if( Hates( subj ) ) {
                return status => status.Hate;
            }

            if( Ignores( subj ) ) {
                return status => status.Ignore;
            }

            throw new Exception( "Wrong attitude" );
        }
    }
}