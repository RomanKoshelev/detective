// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.OpenInfo.cs

namespace Crimenuts.Core.Game.Process
{
    public partial class Process
    {
        private int? DoGetActiveMurderersOpenNum()
        {
            return Master.Master.GetActiveMurderersOpenNum( Case, ActiveMurderers.Count );
        }

        private int? DoGetTodayEvidencesOpenNum()
        {
            return Master.Master.GetTodayEvidencesOpenNum( Case, History.Evidences( Today ).Count );
        }
    }
}