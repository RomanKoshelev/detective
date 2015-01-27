using System;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class HistoryRecordModel<TValue>
    {
        protected HistoryRecordModel(History.Record record, Func<History.Record,TValue> value)
        {
            Agent = new MemberModel(record.Agent);
            Subject = new MemberModel(record.Subject);
            Value = value(record);
            Record = record;
        }

        public History.Record Record { get; private set; }

        public TValue Value { get; private set; }

        public MemberModel Subject { get; private set; }

        public MemberModel Agent { get; private set; }
    }
}