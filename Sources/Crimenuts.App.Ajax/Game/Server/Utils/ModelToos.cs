// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ModelToos.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Utils
{
    public static class ModelToos
    {
        public static void KeepPointInBounds(
            PointModel point,
            double left,
            double top,
            double right,
            double bottom )
        {
            point.X = Math.Max( point.X, left );
            point.Y = Math.Max( point.Y, top );
            point.X = Math.Min( point.X, right );
            point.Y = Math.Min( point.Y, bottom );
        }
    }
}