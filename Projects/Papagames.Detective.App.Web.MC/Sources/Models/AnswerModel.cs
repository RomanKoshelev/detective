using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class AnswerModel : HistoryRecordModel<Answer>
    {
        public AnswerModel(History.Record record)
            : base(record, r => r.Answer)
        {
        }
    }
}