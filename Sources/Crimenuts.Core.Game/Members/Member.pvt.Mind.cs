﻿// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pvt.Mind.cs

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        private readonly List< Member > _murderers = new List< Member >();
        private readonly List< Member > _innocents = new List< Member >();

        private bool HasEvidenceOn( Member subj )
        {
            return KnowsAsInnocent( subj ) || KnowsAsMurderer( subj );
        }

        private bool ThinkIsMurderer( Member subj )
        {
            Trace.Assert( ActualMembersCount > 0, "ActualMembersCount" );
            Trace.Assert( ActualMurderersCount > 0, "ActualMurderersCount" );
            Trace.Assert( ActualMurderersCount <= ActualMembersCount, "ActualMurderersCount <= ActualMembersCount" );

            if( _murderers.Exists( m => m == subj ) ) {
                return true;
            }

            var allInnocentsAreKnown = ( 1 + _innocents.Count( m => m.IsActive ) ) ==
                ( ActualMembersCount - ActualMurderersCount );

            if( allInnocentsAreKnown && !KnowsAsInnocent( subj ) ) {
                return true;
            }

            return false;
        }

        private bool ThinkIsInnocent( Member subj )
        {
            Trace.Assert( ActualMembersCount > 0, "ActualMembersCount" );
            Trace.Assert( ActualMurderersCount > 0, "ActualMurderersCount" );
            Trace.Assert( ActualMurderersCount <= ActualMembersCount, "ActualMurderersCount <= ActualMembersCount" );

            if( _innocents.Exists( m => m == subj ) ) {
                return true;
            }

            var allMurderersAreKnown = _murderers.Count( m => m.IsActive ) == ActualMurderersCount;

            if( allMurderersAreKnown && !KnowsAsMurderer( subj ) ) {
                return true;
            }

            return false;
        }

        private void DoRememberMurderer( Member murderer )
        {
            if( _murderers.NotExists( m => m == murderer ) ) {
                _murderers.Add( murderer );
            }
        }

        private void DoRememberInnocent( Member innocent )
        {
            if( _innocents.NotExists( m => m == innocent ) ) {
                _innocents.Add( innocent );
            }
        }

        private void InitDecisionModules()
        {
            if( IsDetective ) {
                return;
            }
            InitMurderDecisionModule();
            InitEvidenceDecisionModule();
        }
    }
}