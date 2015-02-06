using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Papagames.Detective.Utils
{
    public static class Extensions
    {
        private static readonly Random Random = new Random();

        public static bool EqualContent<T>(this IList<T> l1, ICollection<T> l2)
        {
            if (l2 == null)
                return false;

            if (l1.Count() != l2.Count)
                return false;

            foreach (var i in l2)
            {
                if (!l1.Contains(i)) return false;
            }
            return true;
        }

        public static List<T> ShuffleUsing<T>(this IEnumerable<T> set, Random random)
        {
            var shuffleList = set.ToList();
            var n = shuffleList.Count;
            for (var i = 0; i < n; i++)
            {
                var r = i + (int) (random.NextDouble()*(n - i));
                var t = shuffleList[r];
                shuffleList[r] = shuffleList[i];
                shuffleList[i] = t;
            }
            return shuffleList;
        }

        public static List<T> Shuffle<T>(this IEnumerable<T> list)
        {
            return list.ShuffleUsing(Random);
        }

        public static List<T> SelectRandomList<T>(this IEnumerable<T> list, int num)
        {
            return list.SelectRandomListUsing(num, Random);
        }

        public static List<T> SelectRandomListUsing<T>(this IEnumerable<T> list, int num, Random random)
        {
            Trace.Assert(num > 0);

            var shuffleList = list.ShuffleUsing(random);
            var retList = new List<T>();

            for (var i = 0; i < num; i++)
                retList.Add(shuffleList[i]);

            return retList;
        }

        public static T RandomElement<T>(this IEnumerable<T> enumerable)
        {
            return enumerable.RandomElementUsing(Random);
        }

        public static T RandomElementUsing<T>(this IEnumerable<T> enumerable, Random random)
        {
            var list = enumerable as IList<T> ?? enumerable.ToList();
            Assert.IsTrue(list.Any(), "Empty collection");
            var index = random.Next(0, list.Count());
            return list.ElementAt(index);
        }

        public static char[] GetChars(this string str)
        {
            var chars = new char[str.Length*sizeof (char)];
            Buffer.BlockCopy(str.ToCharArray(), 0, chars, 0, chars.Length);
            return chars;
        }

        public static string Plural(this string str, int num)
        {
            if (num == 1) return str;
            if (str[str.Length - 1] == 'y')
            {
                return str.Substring(0, str.Length - 1) + "ies";
            }
            return str + "s";
        }

        public static string Plural(this int num, string str)
        {
            return string.Format("{0} {1}", num, str.Plural(num));
        }

        public static bool NotExists<T>(this IEnumerable<T> enumerable, Func<T, bool> predicate)
        {
            return !enumerable.Any(predicate);
        }

        public static string SubstringSafe(this string str, int startIndex, int length)
        {
            length = Math.Min(length, str.Length - startIndex);
            return str.Substring(startIndex, length);
        }

        public static string HeOrShe(this string str)
        {
            var end = str.Substring(str.Length - 1, 1);
            return end == "a" ? "she" : "he";
        }

        public static string FoldToStringBy<T>(this IEnumerable<T> enumerable, Func<T, string> selector,
            string delimiter = ", ", string emptyResult="")
        {
            var list = enumerable as IList<T> ?? enumerable.ToList();
            if (!list.Any()) return emptyResult;
            return list.Select(selector).Aggregate((a, s) => string.Format("{0}{1}{2}", a, delimiter, s));
        }

        public static string IfNull(this string str, int? n)
        {
            return n == null ? str : string.Format("{0}", n);
        }

        public static Dictionary<string, object> ToDictionary(this object o)
        {
            var dictionary = new Dictionary<string, object>();

            foreach (var propertyInfo in o.GetType().GetProperties())
            {
                if (propertyInfo.GetIndexParameters().Length == 0)
                {
                    dictionary.Add(propertyInfo.Name, propertyInfo.GetValue(o, null));
                }
            }

            return dictionary;
        }
    }
}