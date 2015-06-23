// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Profile.pvt.Answers.cs

using System;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Packs.Profiles
{
    public partial class Profile
    {
        private readonly char[] _answerPack = AnswerRules.GetChars();
        private const int AnswerRulesPerProfile = 6*3;

        private void CreateAnswerRule()
        {
            AnswerDecodeStart();

            AnswerRule.WitnessInnocent.Love.Innocent = AnswerDecodeNext();
            AnswerRule.WitnessInnocent.Ignore.Innocent = AnswerDecodeNext();
            AnswerRule.WitnessInnocent.Hate.Innocent = AnswerDecodeNext();

            AnswerRule.Murderer.Love.Murderer = AnswerDecodeNext();
            AnswerRule.Murderer.Ignore.Murderer = AnswerDecodeNext();
            AnswerRule.Murderer.Hate.Murderer = AnswerDecodeNext();

            AnswerRule.Uninformed.Love.Uninformed = AnswerDecodeNext();
            AnswerRule.Uninformed.Ignore.Uninformed = AnswerDecodeNext();
            AnswerRule.Uninformed.Hate.Uninformed = AnswerDecodeNext();

            AnswerRule.Murderer.Love.Innocent = AnswerDecodeNext();
            AnswerRule.Murderer.Ignore.Innocent = AnswerDecodeNext();
            AnswerRule.Murderer.Hate.Innocent = AnswerDecodeNext();

            AnswerRule.Murderer.Love.WitnessMurderer = AnswerDecodeNext();
            AnswerRule.Murderer.Ignore.WitnessMurderer = AnswerDecodeNext();
            AnswerRule.Murderer.Hate.WitnessMurderer = AnswerDecodeNext();

            AnswerRule.WitnessMurderer.Love.Murderer = AnswerDecodeNext();
            AnswerRule.WitnessMurderer.Ignore.Murderer = AnswerDecodeNext();
            AnswerRule.WitnessMurderer.Hate.Murderer = AnswerDecodeNext();
        }

        private int _answerDecodeIndex;

        private void AnswerDecodeStart()
        {
            _answerDecodeIndex = 0;
        }

        private AnswerCode AnswerDecodeNext()
        {
            var startIndex = ( int ) Type*AnswerRulesPerProfile;

            return DecodeAnswer( _answerPack[ startIndex + _answerDecodeIndex++ ] );
        }

        private static AnswerCode DecodeAnswer( char c )
        {
            switch( c ) {
                case 'u' :
                    return AnswerCode.Unknown;
                case 'i' :
                    return AnswerCode.Innocent;
                case 'm' :
                    return AnswerCode.Murderer;
                case 's' :
                    return AnswerCode.Suspicious;
                case 'n' :
                    return AnswerCode.NotSuspicious;
            }

            throw new Exception( string.Format( "Wrong AnswerCode [{0}]", c ) );
        }
    }
}