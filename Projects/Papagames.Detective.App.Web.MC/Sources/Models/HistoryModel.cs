using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;

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

        // ===================================================================================== []
        // Private
        private History History { get; set; }

    }
}