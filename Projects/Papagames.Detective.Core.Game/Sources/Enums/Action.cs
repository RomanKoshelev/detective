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
        MurderEmotion,
        ArrestEmotion,
    }

    public static class ActionExtension
    {
        public static bool IsEvidence(this Action action)
        {
            return action == Action.MurdererEvidence || action == Action.InnocentEvidence;
        }

        public static bool IsEmotion(this Action action)
        {
            return action == Action.MurderEmotion || action == Action.ArrestEmotion;
        }

        public static bool IsRealAction(this Action action)
        {
            return (action == Action.Murder ||
                    action == Action.Arrest ||
                    action == Action.InnocentEvidence ||
                    action == Action.MurdererEvidence);
        }


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