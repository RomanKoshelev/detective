// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// FilterConfig.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Mvc;

namespace Crimenuts.App.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters( GlobalFilterCollection filters )
        {
            filters.Add( new HandleErrorAttribute() );
        }
    }
}