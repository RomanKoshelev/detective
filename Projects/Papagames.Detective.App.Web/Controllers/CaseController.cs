using System;
using System.Net;
using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

namespace Papagames.Detective.App.Web.Controllers
{
    public class CaseController : Controller
    {
        // GET: /Case/
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }

        // GET: /Case/Details/123/
        public ActionResult Details(int id)
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
    }
}