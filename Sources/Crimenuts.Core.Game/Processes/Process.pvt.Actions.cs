// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.Actions.cs

using System;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Members;
using Crimenuts.Utils.Extensions;
using Crimenuts.Utils.Traces;

namespace Crimenuts.Core.Game.Processes
{
    public partial class Process
    {
        // ===================================================================================== []
        // User Actions
        private void DoSkip()
        {
            DoStep();
        }

        private AnswerCode DoAsk( Member respondent, Member subject )
        {
            var answer = respondent.Ask( subject );
            History.StoreAnswer( Today, respondent, subject, answer );
            return answer;
        }

        private static void DoAnnotate( Member member, AnswerCode annotation )
        {
            member.Annotation = annotation;
        }

        private void DoArrest( Member suspect )
        {
            LastArrested = suspect;
            LastArrested.IsPrisoner = true;

            History.StoreArrest( Today, Detective, LastArrested );
            HistoryStoreEmotionalReactionOnArrest( LastArrested );

            DoStep();
        }

        private void DoEarlyArrest( Member suspect )
        {
            SetState( State.Arrest );
            DoArrest( suspect );
        }

        private void DoAsk( int respondent, int subject )
        {
            DoAsk( FindMember( respondent ), FindMember( subject ) );
        }

        private void DoAnnotate( int member, int annotation )
        {
            DoAnnotate( FindMember( member ), ( AnswerCode ) annotation );
        }

        private void DoAutoAsk()
        {
            GetQuestioningRespondents().Shuffle().ForEach( respondent => {
                var subject = ActiveMembers.Where( s => CanAskAbout( respondent, s ) ).RandomElement();
                DoAsk( respondent, subject );
            } );
        }

        private void DoArrest( int suspect )
        {
            DoArrest( FindMember( suspect ) );
        }

        private void DoEarlyArrest( int suspect )
        {
            DoEarlyArrest( FindMember( suspect ) );
        }

        private void DoStop()
        {
            SetState( State.Stop );
        }

        // ===================================================================================== []
        // Core Actions
        private void DoEvidence()
        {
            if( ActiveInnocents.Count == 0 ) {
                return;
            }

            for( var w = 0; w < MaxEvidenceNum; w++ ) {
                SelectWitnessAndEvidence();
            }
        }

        private void DoMurder()
        {
            LastMurderer = ActiveMurderers.RandomElement();
            var victim = LastMurderer.SelectVictim( ActiveInnocents );
            victim.IsVictim = true;

            History.StoreMurder( Today, LastMurderer, victim );
            HistoryStoreEmotionalReactionOnMurder( victim );
        }

        private void DoSkipTo( State state )
        {
            CrimenutsAssert.IsTrue( state >= State,
                "Destinashion state [{0}] can't be achieved from current [{1}]",
                state,
                State );
            do {
                CrimenutsAssert.IsTrue( UserActions.Count == 1,
                    "Can't select action among {0} actions for auto skipping to {1}",
                    UserActions.Count,
                    state );
                var action = UserActions[ 0 ];
                DoExecuteUserAction( action.Type, action.Args, autoSkip : true );
            } while( State != state && State != State.Finished );
            CrimenutsAssert.IsTrue( State == state, "Achived state [{0}] != destinasion [{1}]", State, state );
        }

        // ===================================================================================== []
        // Utils
        private readonly Random _random = new Random( 333 );

        private void SelectWitnessAndEvidence()
        {
            CrimenutsAssert.IsTrue( ActiveInnocents.Count > 0, "No active innocent members!" );

            var witness = ActiveInnocents.RandomElementUsing( _random );
            var subject = witness.SelectEvidence( ActiveMembers );

            if( subject == null ) {
                return;
            }

            if( subject.IsMurderer ) {
                witness.RememberMurderer( subject );
                History.StoreMurderEvidence( Today, witness, subject );
            } else {
                witness.RememberInnocent( subject );
                History.StoreInnocentEvidence( Today, witness, subject );
            }
        }
    }
}