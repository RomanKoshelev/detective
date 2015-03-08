using System;
using System.IO;
using System.Web.Mvc;

namespace Crimenuts.App.Web.Controllers
{
    // Code: ImageController

    public class ImageController : Controller
    {
        private const int CacheDuration = 86400;

        [OutputCache(Duration = CacheDuration, VaryByParam = "id")]
        public ActionResult World(int id)
        {
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", @"Worlds\Simpsons\Images\simpsons.png");
            var stream = new FileStream(path, FileMode.Open);
            return new FileStreamResult(stream, "image/png")
            {
                FileDownloadName = "world.simpsons.png"
            };
        }
    }
}