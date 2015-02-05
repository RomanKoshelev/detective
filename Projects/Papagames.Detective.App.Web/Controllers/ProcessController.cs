using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;
using Papagames.Detective.Core.Game;
using Papagames.Detective.Utils;

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
            var processId = (Identifiable<int, Process>.Identifier) id;

            return View(new ProcessModel(processId));
        }

        public ActionResult Play(int id, int? actionType, params int[] actionParams)
        {
            var processId = (Identifiable<int, Process>.Identifier) id;
            if (actionType != null)
            {
                Schema.ExecuteProcess(processId, (Process.UserAction.ActionType)actionType, actionParams);
                return RedirectToAction("Play", "Process", new {id = processId});
            }
            return View(new ProcessModel(processId));
        }

        // >> Precess > Controller > ClassicPlay
        public ActionResult ClassicPlay(int id, int? face, int? card, int? action, params int[] args)
        {
            var processId = (Identifiable<int, Process>.Identifier)id;
            if (action != null)
            {
                Schema.ExecuteProcess(processId, (Process.UserAction.ActionType)action, args);
                return RedirectToAction("ClassicPlay", "Process", new { id = processId });
            }
            
            ViewBag.Face = face;
            ViewBag.Card = card;

            return View(new ProcessModel(processId));
        }
    }
}