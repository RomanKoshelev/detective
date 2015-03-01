using System.Web.Mvc;
using Crimenuts.App.Web.Models;
using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Controllers
{
    public class ProcessController : Controller
    {
        // ===================================================================================== []
        // Index
        public ActionResult Index()
        {
            return View(new SchemaModel());
        }

        // ===================================================================================== []
        // Info
        public ActionResult Info(int id)
        {
            var processId = (Process.Identifier)id;

            return View(new ProcessModel(processId));
        }

        // ===================================================================================== []
        // Play
        public ActionResult Play(int id,
            int? face,
            int? card,
            int? actionType,
            int? respondent,
            int? subject,
            int? suspect)
        {
            // >> Precess | Controller | Play
            var processId = (Process.Identifier)id;

            if (actionType != null)
            {
                ExecuteAction(actionType, respondent, subject, suspect, processId);
                return RedirectToAction("Play", "Process", new {id = processId, face, card});
            }

            ViewBag.Face = face;
            ViewBag.Card = card;
            ViewBag.Respondent = respondent;
            ViewBag.Subject = subject;
            
            return View(new ProcessModel(processId));
        }

        // ===================================================================================== []
        // Utils
        private static void ExecuteAction(int? actionType, int? respondent, int? subject, int? suspect, Process.Identifier processId)
        {
            var action = (Process.UserAction.ActionType) actionType;
            var args = new int[] {};

            switch (action)
            {
                case Process.UserAction.ActionType.Ask:
                    args = new[] {respondent ?? 0, subject ?? 0};
                    break;
                case Process.UserAction.ActionType.AutoAsk:
                    args = new int[] {};
                    break;
                case Process.UserAction.ActionType.Arrest:
                case Process.UserAction.ActionType.EarlyArrest:
                    args = new[] { suspect ?? 0 };
                    break;
            }

            Schema.ExecuteProcess(processId, action, args);
        }
    }
}