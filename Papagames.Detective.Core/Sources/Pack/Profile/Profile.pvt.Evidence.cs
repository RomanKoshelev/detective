using System;

namespace Papagames.Detective.Core
{
    public partial class Profile
    {
        private readonly char[] _evidencePack = EvidenceRules.GetChars();
        private const int EvidenceRulesPerProfile = 6;

        private void CreateEvidenceRules()
        {
            EvidenceRule.Init(EvidenceRulesPerProfile);

            EvidenceDecodeStart();

            for (var i = EvidenceRulesPerProfile - 1; i >= 0; i--)
            {
                EvidenceRule.EvidenceSigns[i] = EvidenceDecodeNext();
            }
        }

        private int _evidenceDecodeIndex;

        private void EvidenceDecodeStart()
        {
            _evidenceDecodeIndex = 0;
        }

        private EvidenceSign EvidenceDecodeNext()
        {
            var startIndex = (int)Type * EvidenceRulesPerProfile;

            return DecodeEvidence(_evidencePack[startIndex + _evidenceDecodeIndex++]);
        }

        private static EvidenceSign DecodeEvidence(char c)
        {
            switch (c)
            {
                case 'l':
                    return EvidenceSign.IsLoved;
                case 'h':
                    return EvidenceSign.IsHated;
                case 'i':
                    return EvidenceSign.IsIgnored;
                case 'b':
                    return EvidenceSign.HatesMe;
                case 'g':
                    return EvidenceSign.LovesMe;
                case 'n':
                    return EvidenceSign.IgnoresMe;
            }

            throw new Exception(string.Format("Wrong EvidenceCode [{0}]", c));
        }
    }
}