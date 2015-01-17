using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

namespace Papagames.Detective.App.Web.Controllers
{
    public class GameController : Controller
    {
        public ActionResult Index()
        {
            var _game = new Game();

            return View(_game);
        }
    }
}
