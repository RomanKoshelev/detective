﻿// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// BundleConfig.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Optimization;

namespace Crimenuts.App.Web
{
    public static class BundleConfig
    {
        public static void RegisterBundles( BundleCollection bundles )
        {
            // CSS
            bundles.Add( new StyleBundle( "~/Content/css" )
                .Include( "~/Content/Themes/Default/site.css" ) );

            // Classic CSS
            bundles.Add( new StyleBundle( "~/Content/Themes/Classic/css" )
                .Include( "~/Content/Themes/Classic/Common.css" )
                .Include( "~/Content/Themes/Classic/Layout.css" )
                .Include( "~/Content/Themes/Classic/Info.css" )
                .Include( "~/Content/Themes/Classic/Room.css" )
                .Include( "~/Content/Themes/Classic/Room.Members.css" )
                .Include( "~/Content/Themes/Classic/Room.Board.css" ) );

            // Default CSS
            bundles.Add( new StyleBundle( "~/Content/Themes/Default/css" )
                .Include( "~/Content/Themes/Default/site.css" ) );
        }
    }
}