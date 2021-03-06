﻿// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Member.pvt.Emotion.cs

using System;
using System.Diagnostics;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Packs.Rules;

namespace Crimenuts.Core.Game.Members
{
    public partial class Member
    {
        private Emotion DoExpressEmotionOnMurderOrArrest( Member subj )
        {
            if( IsVictim ) {
                return Emotion.Indifferent;
            }
            if( this == subj ) {
                return Emotion.Sad;
            }

            if( IsMurderer ) {
                if( subj.IsMurderer ) {
                    return MakeEmotion( me => me.Murderer, subj, s => s.Murderer );
                }
                if( subj.IsWitnessMurderer ) {
                    return MakeEmotion( me => me.Murderer, subj, s => s.WitnessMurderer );
                }
                return MakeEmotion( me => me.Murderer, subj, s => s.Innocent );
            }

            if( IsWitnessMurderer ) {
                if( subj.IsMurderer ) {
                    return MakeEmotion( me => me.WitnessMurderer, subj, s => s.Murderer );
                }
            }

            if( IsInnocent ) {
                if( subj.IsMurderer ) {
                    return MakeEmotion( me => me.Uninformed, subj, s => s.Murderer );
                }
                return MakeEmotion( me => me.Uninformed, subj, s => s.Innocent );
            }

            throw new Exception( "Wrong emotion logic" );
        }

        private Emotion DoExpressEmotionOnRelationTo( Member subj )
        {
            return Loves( subj )
                ? Emotion.Happy
                : Hates( subj ) ? Emotion.Sad : Ignores( subj ) ? Emotion.Indifferent : Emotion.Error;
        }

        private Emotion MakeEmotion(
            Func< EmotionRule, EmotionRule.MyStatus > statusSelector,
            Member subject,
            Func< EmotionRule.MyStatus.Attitude, Emotion > emotionSelector )
        {
            var attitudeSelector = MakeEmotionAttitudeSelector( subject );
            var emotion = emotionSelector( attitudeSelector( statusSelector( EmotionRule ) ) );
            Trace.Assert( emotion != Emotion.Error );
            return emotion;
        }

        private Func< EmotionRule.MyStatus, EmotionRule.MyStatus.Attitude > MakeEmotionAttitudeSelector(
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

        private EmotionRule EmotionRule
        {
            get { return Person.Profile.EmotionRule; }
        }
    }
}