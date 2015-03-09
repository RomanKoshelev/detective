using System;
using System.IO;
using System.Web.Mvc;

namespace Crimenuts.App.Web.Controllers
{
    // Code: ImageController

    public class ImageController : Controller
    {
        private const int CacheDuration = 86400;

        // ===================================================================================== []
        // World
        [OutputCache(Duration = CacheDuration, VaryByParam = "name")]
        public ActionResult World(string name)
        {
            var filePath = string.Format(@"Worlds\{0}\Images\world.picture.png", name);
            var fileName = string.Format("World-{0}-Picture.png", name);

            return ImageActionResult(filePath, fileName);
        }

        // ===================================================================================== []
        // Utils
        private static ActionResult ImageActionResult(string filePath, string fileName)
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", filePath);
            var stream = new FileStream(path, FileMode.Open);
            return new FileStreamResult(stream, "image/png")
            {
                FileDownloadName = fileName
            };
        }
    }
}