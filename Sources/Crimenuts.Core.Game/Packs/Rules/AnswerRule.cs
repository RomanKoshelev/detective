// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// AnswerRule.cs

using Crimenuts.Core.Game.Enums;

namespace Crimenuts.Core.Game.Packs.Rules
{
    public class AnswerRule
    {
        public class MyStatus
        {
            public class Attitude
            {
                public AnswerCode Innocent = AnswerCode.Error;
                public AnswerCode Murderer = AnswerCode.Error;
                public AnswerCode Uninformed = AnswerCode.Error;
                public AnswerCode WitnessMurderer = AnswerCode.Error;
            }

            public Attitude Love = new Attitude();
            public Attitude Ignore = new Attitude();
            public Attitude Hate = new Attitude();
        }

        public MyStatus Uninformed = new MyStatus();
        public MyStatus WitnessInnocent = new MyStatus();
        public MyStatus WitnessMurderer = new MyStatus();
        public MyStatus Murderer = new MyStatus();
    }
}