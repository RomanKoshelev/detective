// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// WebApiConfig.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Http;

namespace Crimenuts.App.Web
{
    public static class WebApiConfig
    {
        public static void Register( HttpConfiguration config )
        {
            config.Routes.MapHttpRoute(
                name : "DefaultApi",
                routeTemplate : "api/{controller}/{id}",
                defaults : new { id = RouteParameter.Optional }
                );
        }
    }
}