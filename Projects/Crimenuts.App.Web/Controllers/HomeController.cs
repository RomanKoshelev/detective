// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// HomeController.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Mvc;
using Crimenuts.App.Web.Models;

namespace Crimenuts.App.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View( new HomeModel() );
        }
    }
}