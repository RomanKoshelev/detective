using System.Collections.Generic;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class Player
    {
        public IList<Case> Cases = new List<Case>();

        public void LoadCases()
        {
            //Schema.
        }
    }
}