
using System;
using System.IO;
using System.Web.Mvc;

namespace Crimenuts.App.Web.Controllers
{
    public class ImageController : Controller
    {
        // Code: ImageController.World
        public ActionResult World(int id)
        {
            // No need to dispose the stream, MVC does it for you
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", @"Worlds\Simpsons\Images\simpsons.png");
            var stream = new FileStream(path, FileMode.Open);
            var result = new FileStreamResult(stream, "image/png") { FileDownloadName = "image.png" };
            return result;
        }
    }
}