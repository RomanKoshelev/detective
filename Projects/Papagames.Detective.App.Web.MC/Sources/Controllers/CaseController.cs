using System;
using System.Net;
using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

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
            try
            {
                return View(new CaseModel(id));   
            }
            catch (Exception e)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest, e.Message);
            }
        }

        public ActionResult Run(int id)
        {
            var processId = SchemaModel.NewProcess(id);

            return RedirectToAction("Info", "Process", new { id = processId });
        }
    }
}