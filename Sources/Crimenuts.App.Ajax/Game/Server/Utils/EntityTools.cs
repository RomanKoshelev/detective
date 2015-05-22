// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// EntityTools.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Structs;

namespace Crimenuts.App.Ajax.Game.Server.Utils
{
    public static class EntityToos
    {
        public static Point KeepPointInBounds(
            Point point,
            double left,
            double top,
            double right,
            double bottom )
        {
            var x = point.X;
            var y = point.Y;
            x = Math.Max( x, left );
            y = Math.Max( y, top );
            x = Math.Min( x, right );
            y = Math.Min( y, bottom );
            return new Point( x, y );
        }
    }
}