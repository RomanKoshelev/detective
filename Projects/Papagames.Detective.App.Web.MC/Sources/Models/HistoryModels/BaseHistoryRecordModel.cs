using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class BaseHistoryRecordModel
    {
        protected BaseHistoryRecordModel(History.Record record)
        {
            Agent = new MemberModel(record.Agent);
            Subject = new MemberModel(record.Subject);
            Action = record.Action;
        }

        public Action Action { get; private set; }
        public MemberModel Subject { get; private set; }
        public MemberModel Agent { get; private set; }
    }
}