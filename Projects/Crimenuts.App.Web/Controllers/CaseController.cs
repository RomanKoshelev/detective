using System.Web.Mvc;
using Crimenuts.App.Web.Models;
using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Controllers
{
    public class CaseController : Controller
    {
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }

        public ActionResult Info(int id)
        {
            var caseId = (Case.Identifier)id;
            return View(new CaseModel(caseId));
        }

        public ActionResult Run(int id)
        {
            var caseId = (Case.Identifier)id;
            var processId = SchemaModel.RunNewProcess(caseId, State.Questioning);

            return RedirectToAction("Play", "Process", new { id = processId });
        }

        public ActionResult Relations(int id)
        {
            var caseId = (Case.Identifier)id;
            return View(new CaseModel(caseId));
        }
    }
}
