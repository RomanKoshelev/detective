using System;
using System.Web;
using System.Web.Mvc;
using Crimenuts.App.Web.Models;

namespace Crimenuts.App.Web.Controllers
{
    public class SiteController : Controller
    {
        public ActionResult Index()
        {
            return View(new SiteModel());
        }

        public ActionResult Language(int id)
        {
            SetCookieLang(id);
            return RedirectToAction("Index", "Site");
        }

        private void SetCookieLang(int id)
        {
            var langCookie = new HttpCookie(SiteModel.LangCookieName, id.ToString())
            {
                Expires = DateTime.Now.AddDays(100)
            };
            HttpContext.Response.SetCookie(langCookie);
        }
    }
}