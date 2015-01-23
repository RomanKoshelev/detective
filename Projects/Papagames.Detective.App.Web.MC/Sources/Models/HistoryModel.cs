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

        // ===================================================================================== []
        // Private
        private History History { get; set; }
    }
}
