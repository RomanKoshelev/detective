// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// EmotionRule.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Core.Game
{
    public class EmotionRule
    {
        public class MyStatus
        {
            public class Attitude
            {
                public Emotion Innocent = Emotion.Error;
                public Emotion Murderer = Emotion.Error;
                public Emotion WitnessMurderer = Emotion.Error;
            }

            public Attitude Love = new Attitude();
            public Attitude Ignore = new Attitude();
            public Attitude Hate = new Attitude();
        }

        public MyStatus Uninformed = new MyStatus();
        public MyStatus Murderer = new MyStatus();
        public MyStatus WitnessMurderer = new MyStatus();
    }
}