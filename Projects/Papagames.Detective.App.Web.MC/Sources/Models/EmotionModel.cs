using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    sealed public class EmotionModel: HistoryRecordModel<Emotion>
    {
        // Book: EmotionModel 
        public EmotionModel(History.Record record)
            :base(record, r=>r.Emotion)
        {
        }
    }
}