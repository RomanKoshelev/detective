// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Answer.cs

namespace Crimenuts.Core.Game.Enums
{
    public enum AnswerCode
    {
        Error,
        Unknown,
        Innocent,
        Murderer,
        Suspicious,
        NotSuspicious
    }

    public static class AnswerExtension
    {
        public static string PrefixedString( this AnswerCode answerCode )
        {
            return string.Format( "Core:Game:Answer:Value:{0}", answerCode );
        }
    }
}