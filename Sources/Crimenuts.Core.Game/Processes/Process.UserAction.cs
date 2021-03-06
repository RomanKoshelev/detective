﻿// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.UserAction.cs

using System.Collections.Generic;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Processes
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
                EarlyArrest,
                Continue
            }

            public ActionType Type = ActionType.None;
            public IList< int > Args = new List< int >();
            public string Description;

            public override string ToString()
            {
                var res = string.Format( "{0} {1}", Type, Args.FoldToStringBy( p => string.Format( "{0}", p ) ) );
                return string.IsNullOrEmpty( Description ) ? res : Description;
            }
        }
    }
}