using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class ProcessModel
    {
        // ===================================================================================== []
        // Public
        public ProcessModel(int id)
        {
            Process = Schema.FindProcess(id);
        }
        public int Id { get { return 123; } }

        public string ShortInfo
        {
            get { return DoGetShortInfo(); }
        }
        public string WorldName
        {
            get { return Process.WorldName; }
        }
        public int ActiveMemberNum
        {
            get { return Process.ActiveMembers.Count; }
        }
        public int ActiveMurdererNum
        {
            get { return Process.ActiveMurderers.Count; }
        }
        public int ArrestedNum
        {
            get { return Process.Prisoners.Count; }
        }
        public int VictimNum
        {
            get { return Process.Victims.Count; }
        }

        public int CaseId
        {
            get { return Process.CaseId; }
        }
        // ===================================================================================== []
        // Pivate
        private Process Process { get; set; }
        private string DoGetShortInfo()
        {
            return string.Format("{0}: {1} case#{2} members: {3}/{4} #{5} x{6}", Id, WorldName, CaseId, ActiveMemberNum, ActiveMurdererNum, ArrestedNum, VictimNum);
        }
    }
}