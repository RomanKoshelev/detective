// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Program.pvt.System.cs
// Roman, 2015-03-29 12:55 AM

using System;

namespace Crimenuts.App.Console
{
    internal partial class Program
    {
        private static void PrintException( Exception e )
        {
            System.Console.WriteLine( "\n\n****** ERROR *******\n\n{1}\n\n{0}\n\n{2}\n",
                e.Message,
                e.TargetSite,
                e.StackTrace );
            throw e;
        }
    }
}