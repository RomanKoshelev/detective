// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Profile.pvt.Murder.cs

using System;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Packs.Profiles
{
    public partial class Profile
    {
        private const int MajorMurderRulesNum = 3;
        private const int MinorMurderRulesNum = 3;
        private readonly char[] _murderPack = MurderRules.GetChars();
        private const int MurderRulesPerProfile = MajorMurderRulesNum + MinorMurderRulesNum;

        private void CreateMurderRules()
        {
            MurderRule.Init( MajorMurderRulesNum, MinorMurderRulesNum );

            MurderDecodeStart();

            for( var i = MajorMurderRulesNum - 1; i >= 0; i-- ) {
                MurderRule.VictimSigns[ ( int ) FactorPriority.Major ][ i ] = MurderDecodeNext();
            }
            for( var i = MinorMurderRulesNum - 1; i >= 0; i-- ) {
                MurderRule.VictimSigns[ ( int ) FactorPriority.Minor ][ i ] = MurderDecodeNext();
            }
        }

        private int _murderDecodeIndex;

        private void MurderDecodeStart()
        {
            _murderDecodeIndex = 0;
        }

        private VictimSign MurderDecodeNext()
        {
            var startIndex = ( int ) Type*MurderRulesPerProfile;

            return DecodeMurder( _murderPack[ startIndex + _murderDecodeIndex++ ] );
        }

        private static VictimSign DecodeMurder( char c )
        {
            switch( c ) {
                case 'w' :
                    return VictimSign.KnowActiveMurderers;
                case 'm' :
                    return VictimSign.KnowIamMurderer;
                case 'u' :
                    return VictimSign.InnocentDontKnowActiveMurderers;
                case 'l' :
                    return VictimSign.IsLoved;
                case 'h' :
                    return VictimSign.IsHated;
                case 'i' :
                    return VictimSign.IsIgnored;
            }

            throw new Exception( string.Format( "Wrong MurderCode [{0}]", c ) );
        }
    }
}