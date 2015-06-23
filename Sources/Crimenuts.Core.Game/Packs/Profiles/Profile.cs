// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Profile.cs

using System.Collections.Generic;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Packs.Rules;

namespace Crimenuts.Core.Game.Packs.Profiles
{
    public partial class Profile
    {
        public readonly ProfileType Type = ProfileType.Undefined;
        public readonly AnswerRule AnswerRule = new AnswerRule();
        public readonly EmotionRule EmotionRule = new EmotionRule();
        public readonly MurderRule MurderRule = new MurderRule();
        public readonly EvidenceRule EvidenceRule = new EvidenceRule();

        public Profile( ProfileType type )
        {
            Type = type;

            if( IsDetective ) {
                return;
            }

            CreateAnswerRule();
            CreateEmotionRule();
            CreateMurderRules();
            CreateEvidenceRules();
        }

        public bool IsDetective
        {
            get { return Type == ProfileType.Detective; }
        }

        public static IList< Profile > LoadAll()
        {
            var profiles = new List< Profile >();
            for( var type = ProfileType.Normal; type <= ProfileType.Enemy; type++ ) {
                profiles.Add( new Profile( type ) );
            }
            return profiles;
        }

        public int GetMurderRulesNum( FactorPriority pr )
        {
            return pr == FactorPriority.Major ? MajorMurderRulesNum : MinorMurderRulesNum;
        }

        public int GetEvidenceRulesNum()
        {
            return EvidenceRulesPerProfile;
        }
    }
}