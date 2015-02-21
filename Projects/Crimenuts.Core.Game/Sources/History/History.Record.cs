using MoreLinq;

namespace Crimenuts.Core.Game
{
    public partial class History
    {
        public class Record
        {
            public Record(int currentDay, Action action, Member agent, Member subject=null)
            {
                Day = currentDay;
                Action = action;
                Agent = agent;
                Subject = subject;
                Emotion = Emotion.Error;
                Answer = Answer.Error;
            }

            public Record(int currentDay, Action action, Member agent, Member subject, Answer answer)
                : this(currentDay, action, agent, subject)
            {
                Answer = answer;
            }

            public Record(int currentDay, Action action, Member agent, Member subject, Emotion emotion)
                : this(currentDay, action, agent, subject)
            {
                Emotion = emotion;
            }

            public int Day { get; set; }
            public Action Action { get; set; }
            public Member Agent { get; set; }
            public Member Subject { get; set; }
            public Answer Answer { get; set; }
            public Emotion Emotion { get; set; }
        }

        private int LastDay
        {
            get { return Records.Count > 0 ? Records.MaxBy(i => i.Day).Day : FirstDay; }
        }

        private int FirstDay
        {
            get { return 1; }
        }
    }
}