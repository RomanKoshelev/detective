using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;
using Papagames.Detective.Core.Game;

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
            var processId = (Process.Identifier)id;

            return View(new ProcessModel(processId));
        }

        public ActionResult Play(int id, int? actionType)
        {
            var processId = (Process.Identifier)id;
            if (actionType != null)
            {
                // todo: call user action Schema.UserAction (actionType, params) with unparsed args
                Schema.PlayProcess(processId, (Process.UserAction.ActionType) actionType);
            }
            return View(new ProcessModel(processId));
        }
    }
}