using System.Web.Optimization;

namespace Papagames.Detective.App.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/Themes/Default/site.css"));
            
            bundles.Add(new StyleBundle("~/Content/Themes/Table/css")
                .Include("~/Content/Themes/Table/site.css"));
            
            bundles.Add(new StyleBundle("~/Content/Themes/Default/css")
                .Include("~/Content/Themes/Default/site.css"));
        }
    }
}