namespace Crimenuts.Core.Game
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
        public static string PrefixedString(this Answer answer)
        {
            return string.Format("Core:Game:Answer:Value:{0}",answer);
        }
    }
}