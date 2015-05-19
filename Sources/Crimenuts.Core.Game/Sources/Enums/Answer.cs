// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// Answer.cs
// Roman, 2015-03-29 12:57 AM

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
        public static string PrefixedString( this Answer answer )
        {
            return string.Format( "Core:Game:Answer:Value:{0}", answer );
        }
    }
}