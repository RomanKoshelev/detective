using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    sealed public class EmotionModel: GenericHistoryRecordModel<Emotion>
    {
        public EmotionModel(History.Record record)
            :base(record, r=>r.Emotion)
        {
        }
    }
}