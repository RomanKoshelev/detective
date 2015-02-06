﻿using System.Collections.Generic;
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
                AutoAsk,
                Arrest,
                Start,
                Stop,
            }

            public ActionType Type = ActionType.None;
            public IList<int> Params = new List<int>();
            public string Description;

            public override string ToString()
            {
                return Description?? string.Format("{0} {1}", Type, Params.FoldToStringBy(p => string.Format("{0}", p)));
            }
        }
    }
}