namespace Papagames.Detective.Utils
{
    public static class Assert
    {
        public static void NotNull(object obj, string format, params object[] args)
        {
            if (obj == null)
            {
                throw new DetectiveException(format, args);
            }
        }
    }
}