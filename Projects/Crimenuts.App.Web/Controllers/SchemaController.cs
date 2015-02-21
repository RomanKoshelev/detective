using System.Web.Mvc;
using Crimenuts.App.Web.Models;

namespace Crimenuts.App.Web.Controllers
{
    public class SchemaController : Controller
    {
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }
    }
}