// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Process.pvt.OpenInfo.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Core.Game
{
    public partial class Process
    {
        private int? DoGetActiveMurderersOpenNum()
        {
            return Master.GetActiveMurderersOpenNum( Case, ActiveMurderers.Count );
        }

        private int? DoGetTodayEvidencesOpenNum()
        {
            return Master.GetTodayEvidencesOpenNum( Case, History.Evidences( Today ).Count );
        }
    }
}