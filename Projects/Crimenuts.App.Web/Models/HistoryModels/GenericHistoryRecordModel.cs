using System;
using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    public class GenericHistoryRecordModel<TValue> : BaseHistoryRecordModel
    {
        protected GenericHistoryRecordModel(History.Record record, Func<History.Record,TValue> value)
            :base(record)
        {
            Value = value(record);
        }

        public TValue Value { get; private set; }
    }
}