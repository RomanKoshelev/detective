// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// History.Record.cs

using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Members;
using MoreLinq;

namespace Crimenuts.Core.Game.Histories
{
    public partial class History
    {
        public class Record
        {
            public Record( int currentDay, Action action, Member agent, Member subject = null )
            {
                Day = currentDay;
                Action = action;
                Agent = agent;
                Subject = subject;
                Emotion = Emotion.Error;
                AnswerCode = AnswerCode.Error;
            }

            public Record( int currentDay, Action action, Member agent, Member subject, AnswerCode answerCode )
                : this( currentDay, action, agent, subject )
            {
                AnswerCode = answerCode;
            }

            public Record( int currentDay, Action action, Member agent, Member subject, Emotion emotion )
                : this( currentDay, action, agent, subject )
            {
                Emotion = emotion;
            }

            public int Day { get; set; }
            public Action Action { get; set; }
            public Member Agent { get; set; }
            public Member Subject { get; set; }
            public AnswerCode AnswerCode { get; set; }
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