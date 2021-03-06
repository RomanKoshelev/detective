﻿// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pvt.Murder.cs

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Packs.Rules;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        private readonly int[] _factorMultiplier = { 1, 100 };
        private IList< Func< Member, int > >[] _murderFactors;

        private Member DoSelectVictim( IEnumerable< Member > victims )
        {
            var list = victims as IList< Member > ?? victims.ToList();
            Trace.Assert( list.Any(), "No victims are available" );
            return list.OrderBy( MurderFactor ).Last();
        }

        private void InitMurderDecisionModule()
        {
            InitMurderFactors();

            for( var priority = FactorPriority.Minor; priority <= FactorPriority.Major; priority++ ) {
                for( var i = 0; i < Person.Profile.GetMurderRulesNum( priority ); i++ ) {
                    AddMurderFactor( priority, GetMurderRulePredicate( priority, i + 1 ), i + 1 );
                }
            }
        }

        private void InitMurderFactors()
        {
            _murderFactors = new IList< Func< Member, int > >[] {
                new List< Func< Member, int > >(),
                new List< Func< Member, int > >()
            };
        }

        private int MurderFactor( Member subj )
        {
            Trace.Assert( subj != this );
            Trace.Assert( subj.IsActive );

            var factorValue = CalcMurderFactor( FactorPriority.Major, subj ) +
                CalcMurderFactor( FactorPriority.Minor, subj );

            return factorValue;
        }

        private MurderRule MurderRule
        {
            get { return Person.Profile.MurderRule; }
        }

        private Predicate< Member > GetMurderRulePredicate( FactorPriority priority, int order )
        {
            switch( MurderRule.GetVictimSign( priority, order ) ) {
                case VictimSign.KnowIamMurderer :
                    return KnowsIamMurderer;
                case VictimSign.KnowActiveMurderers :
                    return KnowActiveMurderers;
                case VictimSign.InnocentDontKnowActiveMurderers :
                    return InnocentDontKnowActiveMurderers;
                case VictimSign.IsHated :
                    return Hates;
                case VictimSign.IsLoved :
                    return Loves;
                case VictimSign.IsIgnored :
                    return Ignores;
            }
            throw new Exception( "Unknown Victim sign" );
        }

        private bool KnowsIamMurderer( Member subj )
        {
            Trace.Assert( IsMurderer );
            return subj.KnowsAsMurderer( this );
        }

        private bool KnowActiveMurderers( Member subj )
        {
            Trace.Assert( IsMurderer );
            return subj.IsWitnessMurderer;
        }

        private bool InnocentDontKnowActiveMurderers( Member subj )
        {
            Trace.Assert( IsMurderer );
            Trace.Assert( subj.IsInnocent );
            return !subj.IsWitnessMurderer;
        }

        private void AddMurderFactor( FactorPriority factorPriority, Predicate< Member > predicat, int value )
        {
            _murderFactors[ ( int ) factorPriority ].Add( m => predicat( m ) ? value : 0 );
        }

        private int CalcMurderFactor( FactorPriority factorPriority, Member subj )
        {
            var f = ( int ) factorPriority;
            return _murderFactors[ f ].Select( factor => factor( subj ) ).Max()*_factorMultiplier[ f ];
        }
    }
}