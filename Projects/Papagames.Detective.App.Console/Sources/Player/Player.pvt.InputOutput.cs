using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Console
{
    internal partial class Player
    {
        private int PromptInt(string text, IList<int> values, int defVal)
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

        private void Write(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.Write(format, args);
        }

        private void WriteHeader(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.WriteLine();
            System.Console.WriteLine(
                "================================================================================================================================================================");
            System.Console.WriteLine(format, args);
            System.Console.WriteLine();
        }

        private void WriteLine(string format = "", params Object[] args)
        {
            if (SilenceMode) return;
            System.Console.WriteLine("  " + format, args);
        }

        private void PressEnterToContinue(string prompt = "Press Enter to continue...")
        {
            if (SilenceMode) return;
            System.Console.Write(prompt);
            if (!AutoMode)
                System.Console.ReadLine();
        }

        private void WriteDividingLine()
        {
            if (SilenceMode) return;
            System.Console.WriteLine(
                "\n  ---------------------------------------------------------------------------------------------------------------------------------------------------------------");
        }

        private int GetQuestionSubjectForAsking(Member respondent, IEnumerable<Member> subjects)
        {
            var values = subjects.Select(m => m.Number).ToList();
            const string strValues = "";
            var defValue = values.RandomElement();
            return PromptInt(string.Format("Ask{0}{1}", respondent.ShortInfoName(12), strValues), values, defValue);
        }
    }
}