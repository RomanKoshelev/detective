using System;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Console
{
    internal partial class Program
    {
        // ReSharper disable once UnusedMember.Local
/*        private static void RunStatistics(Process process)
        {
            Player.AutoMode = true;
            Player.SilenceMode = true;

            const int count = 1000;
            const int min = 3;
            const int max = 12;

            System.Console.WriteLine("\nGame statistics calculation\n[success rates (SR), success (SD) and average (AD) durations based on total (N) and murderers (M) counts]\n\nFrom {0} to {1} members {2} times\n", min, max, count);
            System.Console.WriteLine("{0,4}{1,4}{2,7}{3,7}{4,9}\n", "N", "M", "AD", "SD", "SR");

            for (var n = min; n <= max; n++)
            {
                for (var m = 1; m <= process.CalcMaxMurdersNum(n); m++)
                {
                    var stat = CalcGameSuccessRate(count, process, n, m);
                    System.Console.WriteLine("{0,4}{1,4}{2,7:N1}{3,7:N1}{4,9:N3}", n, m, stat.Item1, stat.Item2, stat.Item3);
                }
            }
            System.Console.WriteLine("\nDone.\n");
        }*/
/*
        private static Tuple<double, double, double> CalcGameSuccessRate(int count, Process process, int n, int m)
        {
            var success = 0.0;
            var sd = 0.0;
            var ad = 0.0;

            for (var c = 0; c < count; c++)
            {
                System.Console.Write("{0,4}{1,4}{2,6}%\r", n, m, c * 100 / count);
                var res = RunGame(process, n, m);
                success += res.Item1 ? 1 : 0;
                sd += res.Item1 ? res.Item2 : 0;
                ad += res.Item2;
            }
            return new Tuple<double, double, double>(ad/count, sd/success, success/count);
        }

        private static Tuple<bool,int> RunGame(Process process, int memberNum, int murderNum)
        {
            process.Run(memberNum, murderNum);
            return new Tuple<bool, int>(process.DidDeteciveWin, process.CurrentDay);
        }*/
    }
}

