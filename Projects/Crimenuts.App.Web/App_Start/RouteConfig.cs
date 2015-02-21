using System.Web.Mvc;
using System.Web.Routing;
using Crimenuts.Utils.Web;

namespace Crimenuts.App.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            var route = new ArrayRoute("{controller}/{action}/{id}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new
                {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                })
            };
            routes.Add("Default", route);
        }
    }
}