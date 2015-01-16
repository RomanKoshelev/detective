﻿using System;
using System.Diagnostics;

namespace Papagames.Detective.Core.Game
{
    public partial class Member
    {
        private Emotion DoExpressEmotionOnMurderOrArrest(Member subj)
        {
            Trace.Assert(IsActive);
            Trace.Assert(this != subj);

            if (IsMurderer)
            {
                if (subj.IsMurderer)
                    return MakeEmotion(me => me.Murderer, subj, s => s.Murderer);
                if (subj.IsWitnessMurderer)
                    return MakeEmotion(me => me.Murderer, subj, s => s.WitnessMurderer);
                return MakeEmotion(me => me.Murderer, subj, s => s.Innocent);
            }

            if (IsWitnessMurderer)
            {
                if (subj.IsMurderer)
                    return MakeEmotion(me => me.WitnessMurderer, subj, s => s.Murderer);
            }

            if (IsInnocent)
            {
                if (subj.IsMurderer)
                    return MakeEmotion(me => me.Uninformed, subj, s => s.Murderer);
                return MakeEmotion(me => me.Uninformed, subj, s => s.Innocent);
            }

            throw new Exception("Wrong emotion logic");
        }

        private Emotion MakeEmotion(Func<EmotionRule, EmotionRule.MyStatus> statusSelector,
            Member subject,
            Func<EmotionRule.MyStatus.Attitude, Emotion> emotionSelector)
        {
            var attitudeSelector = MakeEmotionAttitudeSelector(subject);
            var emotion = emotionSelector(attitudeSelector(statusSelector(EmotionRule)));
            Trace.Assert(emotion != Emotion.Error);
            return emotion;
        }

        private Func<EmotionRule.MyStatus, EmotionRule.MyStatus.Attitude> MakeEmotionAttitudeSelector(
            Member subj)
        {
            if (Love(subj))
                return status => status.Love;
            if (Hate(subj))
                return status => status.Hate;
            if (Ignore(subj))
                return status => status.Ignore;
            throw new Exception("Wrong attitude");
        }

        private EmotionRule EmotionRule
        {
            get { return Person.Profile.EmotionRule; }
        }
    }
}