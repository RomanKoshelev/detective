// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// BaseHistoryRecordModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.History;

namespace Crimenuts.App.Web.Models
{
    public class BaseHistoryRecordModel
    {
        protected BaseHistoryRecordModel( History.Record record )
        {
            Agent = new MemberModel( record.Agent );
            Subject = new MemberModel( record.Subject );
            Action = record.Action;
        }

        public Action Action { get; private set; }
        public MemberModel Subject { get; private set; }
        public MemberModel Agent { get; private set; }
    }
}