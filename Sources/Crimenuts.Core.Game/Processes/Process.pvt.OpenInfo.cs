// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.OpenInfo.cs

using Crimenuts.Core.Game.Masters;

namespace Crimenuts.Core.Game.Processes
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