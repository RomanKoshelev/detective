namespace Papagames.Detective.Core.Game
{
    public enum Action
    {
        Error,
        Participation,
        Murder,
        MurdererEvidence,
        InnocentEvidence,
        Answer,
        Posthumous,
        Arrest,
        EmotionOnMurder,
        EmotionOnArrest
    }

    public static class ActionExtension
    {
        public static string VerbalTemplate(this Action action)
        {
            switch (action)
            {
                case Action.Murder:
                    return "x {0} murdered {1}";
                case Action.Arrest:
                    return "# {0} arrested {1}";
                case Action.InnocentEvidence:
                    return "+ {0} knew that {1} is innocent";
                case Action.MurdererEvidence:
                    return "- {0} knew that {1} is murderer";
            }
            return action + "({0},{1})";
        }
    }
}