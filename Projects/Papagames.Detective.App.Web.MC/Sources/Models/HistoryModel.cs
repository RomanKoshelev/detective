using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Web.Models
{
    public class HistoryModel
    {
        // ===================================================================================== []
        // Constructor
        public HistoryModel(History history)
        {
            History = history;
        }

        public IEnumerable<int> Days
        {
            get { return History.Days; }
        }

        public IList<AnswerModel> Answers(int day)
        {
            return History.Answers.Where(r => r.Day == day).Select(r => new AnswerModel(r)).ToList();
        }

        public IList<EmotionModel> EmotionValues(Action emotionType, int subjectNum)
        {
            return Emotions(emotionType).Where(e => e.Subject.Number == subjectNum).ToList();
        }
        public IList<EmotionModel> EmotionSubjects(Action emotionType)
        {
            return Emotions(emotionType).DistinctBy(e=>e.Subject.Number).ToList();
        }

        // ===================================================================================== []
        // Private
        private History History { get; set; }
        private IList<EmotionModel> Emotions(Action action)
        {
            Assert.IsTrue(action.IsEmotion(), "Wrong emotion [{0}]", action);
            return History.Records.OrderBy(r=>r.Day).Where(r => r.Action == action).Select(r => new EmotionModel(r)).ToList();
        }
    }
}