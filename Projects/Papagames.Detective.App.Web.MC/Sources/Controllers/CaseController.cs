using System;
using System.Net;
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
            var caseId = (Case.Identifier)id;
            return View(new CaseModel(caseId));   
        }

        public ActionResult Run(int id)
        {
            var caseId = (Case.Identifier)id;
            var processId = SchemaModel.NewProcess(caseId);

            return RedirectToAction("Info", "Process", new { id = processId });
        }
    }
}