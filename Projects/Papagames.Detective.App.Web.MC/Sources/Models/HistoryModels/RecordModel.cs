using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    sealed public class RecordModel: BaseHistoryRecordModel
    {
        public RecordModel(History.Record record)
            :base(record)
        {
        }
    }
}