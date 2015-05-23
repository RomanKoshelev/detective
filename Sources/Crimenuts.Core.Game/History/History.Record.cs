// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// History.Record.cs

using Crimenuts.Core.Game.Enums;
using MoreLinq;

namespace Crimenuts.Core.Game.History
{
    public partial class History
    {
        public class Record
        {
            public Record( int currentDay, Action action, Member.Member agent, Member.Member subject = null )
            {
                Day = currentDay;
                Action = action;
                Agent = agent;
                Subject = subject;
                Emotion = Emotion.Error;
                Answer = Answer.Error;
            }

            public Record( int currentDay, Action action, Member.Member agent, Member.Member subject, Answer answer )
                : this( currentDay, action, agent, subject )
            {
                Answer = answer;
            }

            public Record( int currentDay, Action action, Member.Member agent, Member.Member subject, Emotion emotion )
                : this( currentDay, action, agent, subject )
            {
                Emotion = emotion;
            }

            public int Day { get; set; }
            public Action Action { get; set; }
            public Member.Member Agent { get; set; }
            public Member.Member Subject { get; set; }
            public Answer Answer { get; set; }
            public Emotion Emotion { get; set; }
        }

        private int LastDay
        {
            get { return Records.Count > 0 ? Records.MaxBy( i => i.Day ).Day : FirstDay; }
        }

        private int FirstDay
        {
            get { return 1; }
        }
    }
}