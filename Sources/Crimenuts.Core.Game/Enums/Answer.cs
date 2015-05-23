// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Answer.cs

namespace Crimenuts.Core.Game.Enums
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
        public static string PrefixedString( this Answer answer )
        {
            return string.Format( "Core:Game:Answer:Value:{0}", answer );
        }
    }
}