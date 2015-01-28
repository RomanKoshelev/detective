using System;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private int? DoGetActiveMurderersOpenNum()
        {
            return Master.GetActiveMurderersOpenNum(Case, ActiveMurderers.Count);
        }

        private int? DoGetLastNightEvidencesOpenNum()
        {
            return Master.GetLastNightEvidencesOpenNum(Case, History.Evidences(CurrentDay).Count);
        }
    }
}