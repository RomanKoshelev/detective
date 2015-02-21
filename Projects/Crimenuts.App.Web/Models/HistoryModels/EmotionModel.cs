using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    sealed public class EmotionModel: GenericHistoryRecordModel<Emotion>
    {
        public EmotionModel(History.Record record)
            :base(record, r=>r.Emotion)
        {
        }
    }
}