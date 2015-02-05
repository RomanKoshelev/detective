using System;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        private int? DoGetActiveMurderersOpenNum()
        {
            return Master.GetActiveMurderersOpenNum(Case, ActiveMurderers.Count);
        }

        private int? DoGetTodayEvidencesOpenNum()
        {
            return Master.GetTodayEvidencesOpenNum(Case, History.Evidences(Today).Count);
        }
    }
}