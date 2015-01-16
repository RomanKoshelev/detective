namespace Papagames.Detective.Core.Game
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