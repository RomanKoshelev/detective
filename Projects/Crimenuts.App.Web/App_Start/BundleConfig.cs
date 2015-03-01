using System.Web.Optimization;

namespace Crimenuts.App.Web
{
    public static class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            // CSS
            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/Themes/Default/site.css"));

            // Classic CSS
            bundles.Add(new StyleBundle("~/Content/Themes/Classic/css")
                .Include("~/Content/Themes/Classic/Common.css")
                .Include("~/Content/Themes/Classic/Layout.css")
                .Include("~/Content/Themes/Classic/Room.css")
                .Include("~/Content/Themes/Classic/Room.Members.css")
                .Include("~/Content/Themes/Classic/Room.Board.css"));

            // Default CSS
            bundles.Add(new StyleBundle("~/Content/Themes/Default/css")
                .Include("~/Content/Themes/Default/site.css"));
        }
    }
}