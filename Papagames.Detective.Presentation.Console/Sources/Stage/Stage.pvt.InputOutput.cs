using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Papagames.Detective.Core;

namespace Papagames.Detective.Presentation.Console
{
    internal partial class Stage
    {
        private static int PromptInt(string text, IList<int> values, int defVal)
        {
            var strValues = values.Select(v => v.ToString(CultureInfo.InvariantCulture)).Aggregate((res, cur) => res + " " + cur);
            var num = values.RandomElement();
            var ok = false;

            if (SilenceMode) return num;

            do
            {
                try
                {
                    Write("{0}>",text);
                    if (!AutoMode)
                    {
                        var str = System.Console.In.ReadLine() ?? "";
                        num = str == "" ? defVal : int.Parse(str);
                    }
                    if (values == null || values.Any(v => v == num))
                        ok = true;
                    else
                        throw new Exception(string.Format("use [{0}]", strValues));
                }
                catch (Exception exception)
                {
                    System.Console.WriteLine("Wrong number: {0}\n", exception.Message);
                }
            } while (!ok);

            return num;
        }

        private static void Write(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.Write(format, args);
        }

        private static void WriteHeader(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.WriteLine();
            System.Console.WriteLine(
                "================================================================================================================================================================");
            System.Console.WriteLine(format, args);
            System.Console.WriteLine();
        }

        private static void WriteLine(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.WriteLine("  " + format, args);
        }

        private static void PressEnterToContinue(string prompt = "Press Enter to continue...")
        {
            if (SilenceMode) return;
            System.Console.Write(prompt);
            if (!AutoMode)
                System.Console.ReadLine();
        }

        private static void WriteDividingLine()
        {
            if (SilenceMode) return;
            System.Console.WriteLine(
                "\n  ---------------------------------------------------------------------------------------------------------------------------------------------------------------");
        }
    }
}