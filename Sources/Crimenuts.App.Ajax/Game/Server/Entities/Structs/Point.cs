// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Point.cs

using System;
using Crimenuts.App.Ajax.Game.Server.Entities.Interfaces;
using Crimenuts.App.Ajax.Game.Server.Models;

namespace Crimenuts.App.Ajax.Game.Server.Entities.Structs
{
    public struct Point : IModelled< PointModel >
    {
        #region Properties

        public readonly double X;
        public readonly double Y;

        #endregion


        #region Ctors

        public Point( double x, double y )
        {
            X = x;
            Y = y;
        }

        public Point( PointModel point )
        {
            X = point.X;
            Y = point.Y;
        }

        #endregion


        #region IModelled

        public PointModel Model
        {
            get { return new PointModel { X = X, Y = Y }; }
        }

        #endregion


        #region Convertors

        public static implicit operator Point( PointModel m )
        {
            return new Point( m );
        }

        #endregion


        #region API

        public static Point RandomIn( Size box )
        {
            return new Point( box.Width*Random.NextDouble(), box.Height*Random.NextDouble() );
        }

        public static double Distance( Point a, Point b )
        {
            return Math.Sqrt( ( a.X - b.X )*( a.X - b.X ) + ( a.Y - b.Y )*( a.Y - b.Y ) );
        }

        #endregion


        #region Utils

        private static readonly Random Random = new Random( ( int ) DateTime.Now.Ticks & 0x0000FFFF );

        #endregion
    }
}