using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;


namespace Papagames.Detective.App.Web.Controllers
{
    public class ProcessController : Controller
    {
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }

        public ActionResult Info(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}