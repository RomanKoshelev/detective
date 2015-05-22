// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// FilterConfig.cs

using System.Web.Mvc;

namespace Crimenuts.App.Ajax
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters( GlobalFilterCollection filters )
        {
            filters.Add( new HandleErrorAttribute() );
        }
    }
}