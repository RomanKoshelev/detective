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
    }
}