using System.Collections.Generic;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        public class UserAction
        {
            public enum ActionType
            {
                None,
                Skip,
                Ask,
                Arrest
            }

            public ActionType Type = ActionType.None;
            public IList<int> Params = new List<int>();
            public override string ToString()
            {
                return string.Format("{0} {1}", Type, Params.AggregateBy(p => string.Format("{0}",p)));
            }
        }
    }
}