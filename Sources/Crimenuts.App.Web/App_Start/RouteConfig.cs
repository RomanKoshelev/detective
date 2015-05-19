// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// RouteConfig.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Mvc;
using System.Web.Routing;
using Crimenuts.Utils.Web;

namespace Crimenuts.App.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes( RouteCollection routes )
        {
            routes.IgnoreRoute( "{resource}.axd/{*pathInfo}" );

            var route = new ArrayRoute( "{controller}/{action}/{id}", new MvcRouteHandler() ) {
                Defaults = new RouteValueDictionary( new {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                } )
            };
            routes.Add( "Default", route );
        }
    }
}