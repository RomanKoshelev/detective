﻿// Crimenuts (c) 2015 Crocodev
// Research.Signalr.Typescript
// Global.asax.cs

using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using NLog;

namespace Research.Signalr.Typescript
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters( GlobalFilters.Filters );
            RouteConfig.RegisterRoutes( RouteTable.Routes );
            BundleConfig.RegisterBundles( BundleTable.Bundles );
        }

        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();

        protected void Application_Error( object sender, EventArgs e )
        {
            var exception = Server.GetLastError();

            Response.Write( "<h2>SB: Global Page Error</h2>\n" );
            Response.Write( "<p>" + exception.Message + "</p>\n" );
            Response.Write( "<p><pre>" + exception.StackTrace + "</pre></p>\n" );

            Logger.ErrorException( exception.Message, exception );

            Server.ClearError();
        }
    }
}