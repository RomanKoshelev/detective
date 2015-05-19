// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Process.UserAction.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;
using Crimenuts.Utils;

namespace Crimenuts.Core.Game
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