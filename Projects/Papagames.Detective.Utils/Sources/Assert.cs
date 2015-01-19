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

        public static void IsTrue(bool condition, string format, params object[] args)
        {
            if (!condition)
            {
                throw new DetectiveException(format, args);
            }
        }
        public static void Equal(object o1, object o2, string format, params object[] args)
        {
            if (!o1.Equals(o2))
            {
                throw new DetectiveException(format, args);
            }
        }
    }
}