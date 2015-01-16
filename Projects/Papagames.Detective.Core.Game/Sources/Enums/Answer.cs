namespace Papagames.Detective.Core.Game
{
    public enum Answer
    {
        Error,
        Unknown,
        Innocent,
        Murderer,
        Suspicious,
        NotSuspicious
    }

    public static class AswerExtension
    {
        public static string Verbal(this Answer answer)
        {
            switch (answer)
            {
                case Answer.NotSuspicious:
                    return "not suspicious";

                case Answer.Innocent:
                case Answer.Murderer:
                    return answer.ToString();
                
                case Answer.Suspicious:
                case Answer.Unknown:
                    return answer.ToString().ToLower();
            }
            return answer.ToString();
        }
    }
}