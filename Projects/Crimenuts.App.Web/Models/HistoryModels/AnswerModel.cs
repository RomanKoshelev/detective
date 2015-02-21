using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    public class AnswerModel : GenericHistoryRecordModel<Answer>
    {
        public AnswerModel(History.Record record)
            : base(record, r => r.Answer)
        {
        }
    }
}