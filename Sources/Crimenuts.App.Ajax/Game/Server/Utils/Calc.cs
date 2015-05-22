// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Calc.cs

using System;

namespace Crimenuts.App.Ajax.Game.Server.Utils
{
    public static class Calc
    {
        public static double Proportion( double min, double max, double rate )
        {
            return min + ( max - min )*rate;
        }

        public static double Harmonics( double min, double max, double time, double frequency )
        {
            var f = frequency*( 2*Math.PI );
            var t = time*f;
            var c = -Math.PI/2;

            var sin = Math.Sin( c + t );

            return Proportion( min, max, ( sin + 1 )/2 );
        }
    }
}