using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

namespace Papagames.Detective.App.Web.Controllers
{
    public class CaseController : Controller
    {
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }

        public ActionResult Info(int id)
        {
            var caseId = (Identifiable<int, Case>.Identifier)id;
            return View(new CaseModel(caseId));
        }

        public ActionResult Run(int id)
        {
            var caseId = (Identifiable<int, Case>.Identifier)id;
            var processId = SchemaModel.RunNewProcess(caseId, State.Questioning);

            return RedirectToAction("Play", "Process", new { id = processId });
        }

        public ActionResult Relations(int id)
        {
            // >> Case.Relations

            var caseId = (Identifiable<int, Case>.Identifier)id;
            return View(new CaseModel(caseId));
        }
    }
}