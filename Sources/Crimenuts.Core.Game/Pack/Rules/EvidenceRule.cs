// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// EvidenceRule.cs

using System.Diagnostics;
using Crimenuts.Core.Game.Enums;

namespace Crimenuts.Core.Game.Pack.Rules
{
    public class EvidenceRule
    {
        public EvidenceSign[] EvidenceSigns;

        public EvidenceSign GetEvidenceSign( int order )
        {
            CheckSigns( order );
            return EvidenceSigns[ order - 1 ];
        }

        private void CheckSigns( int order )
        {
            Trace.Assert( EvidenceSigns != null, "EvidenceRule.InterestSigns" );
            Trace.Assert( EvidenceSigns.Length >= order, "EvidenceRule.InterestSigns.Count" );
        }

        public void Init( int num )
        {
            EvidenceSigns = new EvidenceSign[num];
        }
    }
}