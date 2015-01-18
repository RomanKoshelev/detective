using System.Net;
using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

namespace Papagames.Detective.App.Web.Controllers
{
    public class CaseController : Controller
    {
        private SchemaModel Schema { get; set; }

        public CaseController()
        {
            InitSchemaModel();
        }

        private void InitSchemaModel()
        {
            Schema = new SchemaModel();
        }

        public ActionResult Index()
        {
            return View(Schema);
        }

        // GET: Case/Details/123
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ViewBag.CaseID = id;
            return View(Schema);        
        }
    }
}