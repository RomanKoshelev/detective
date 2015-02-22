using System.Web.Mvc;
using Crimenuts.App.Web.Models;
using Crimenuts.Utils.Localization;

namespace Crimenuts.App.Web.Controllers
{
    // Now: Localization | Site | Controller
    public class SiteController : Controller
    {
        public ActionResult Index()
        {
            return View(new SiteModel());
        }

        public ActionResult Language(int id)
        {
            var lang = (Lang)id;
            // Todo: set coockie lang=lang 
            return RedirectToAction("Index", "Home");
        }
    }
}