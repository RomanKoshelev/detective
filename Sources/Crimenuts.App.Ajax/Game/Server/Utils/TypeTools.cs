// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// TypeTools.cs

using System.Linq;

namespace Crimenuts.App.Ajax.Game.Server.Utils
{
    internal static class TypeTools
    {
        public static T WhoIs<T>( params object[] objects ) where T : class
        {
            return objects.OfType< T >().FirstOrDefault();
        }

        public static T GetAnother<T>( T first, params object[] objects ) where T : class
        {
            return objects.OfType< T >().FirstOrDefault( o => o != first );
        }
    }
}