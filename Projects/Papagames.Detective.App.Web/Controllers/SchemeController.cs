using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

namespace Papagames.Detective.App.Web.Controllers
{
    public class SchemeController : Controller
    {
        public ActionResult Index()
        {
            return View(new SchemeModel());
        }
    }
}