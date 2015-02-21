using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    sealed public class RecordModel: BaseHistoryRecordModel
    {
        public RecordModel(History.Record record)
            :base(record)
        {
        }
    }
}