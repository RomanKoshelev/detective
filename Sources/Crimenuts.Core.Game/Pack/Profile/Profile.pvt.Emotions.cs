// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Profile.pvt.Emotions.cs

using System;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game.Pack.Profile
{
    public partial class Profile
    {
        private readonly char[] _emotionPack = EmotionRules.GetChars();
        private const int EmotionRulesPerProfile = 6*3;

        private void CreateEmotionRule()
        {
            EmotionsDecodeStart();

            EmotionRule.Murderer.Love.WitnessMurderer = EmotionDecodeNext();
            EmotionRule.Murderer.Ignore.WitnessMurderer = EmotionDecodeNext();
            EmotionRule.Murderer.Hate.WitnessMurderer = EmotionDecodeNext();

            EmotionRule.Murderer.Love.Innocent = EmotionDecodeNext();
            EmotionRule.Murderer.Ignore.Innocent = EmotionDecodeNext();
            EmotionRule.Murderer.Hate.Innocent = EmotionDecodeNext();

            EmotionRule.Uninformed.Love.Innocent = EmotionDecodeNext();
            EmotionRule.Uninformed.Ignore.Innocent = EmotionDecodeNext();
            EmotionRule.Uninformed.Hate.Innocent = EmotionDecodeNext();

            EmotionRule.Murderer.Love.Murderer = EmotionDecodeNext();
            EmotionRule.Murderer.Ignore.Murderer = EmotionDecodeNext();
            EmotionRule.Murderer.Hate.Murderer = EmotionDecodeNext();

            EmotionRule.Uninformed.Love.Murderer = EmotionDecodeNext();
            EmotionRule.Uninformed.Ignore.Murderer = EmotionDecodeNext();
            EmotionRule.Uninformed.Hate.Murderer = EmotionDecodeNext();

            EmotionRule.WitnessMurderer.Love.Murderer = EmotionDecodeNext();
            EmotionRule.WitnessMurderer.Ignore.Murderer = EmotionDecodeNext();
            EmotionRule.WitnessMurderer.Hate.Murderer = EmotionDecodeNext();
        }

        private int _emotionDecodeIndex;

        private void EmotionsDecodeStart()
        {
            _emotionDecodeIndex = 0;
        }

        private Emotion EmotionDecodeNext()
        {
            var startIndex = ( int ) Type*EmotionRulesPerProfile;

            return DecodeEmotion( _emotionPack[ startIndex + _emotionDecodeIndex++ ] );
        }

        private static Emotion DecodeEmotion( char c )
        {
            switch( c ) {
                case 'i' :
                    return Emotion.Indifferent;
                case 'h' :
                    return Emotion.Happy;
                case 's' :
                    return Emotion.Sad;
            }
            throw new Exception( string.Format( "Wrong EmotionCode [{0}]", c ) );
        }
    }
}