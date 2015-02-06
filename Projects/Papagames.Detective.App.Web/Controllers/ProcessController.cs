﻿using System.Data.Metadata.Edm;
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
                Schema.ExecuteProcess(processId, (Process.UserAction.ActionType) actionType, actionParams);
                return RedirectToAction("Play", "Process", new {id = processId});
            }
            return View(new ProcessModel(processId));
        }

        // >> Precess > Controller > ClassicPlay *
        public ActionResult ClassicPlay(int id,
            int? face,
            int? card,
            int? actionType,
            int? respondent,
            int? subject,
            int? suspect)
        {
            var processId = (Identifiable<int, Process>.Identifier) id;

            if (actionType != null)
            {
                ExecuteAction(actionType, respondent, subject, suspect, processId);
                return RedirectToAction("ClassicPlay", "Process", new {id = processId, face, card});
            }

            ViewBag.Face = face;
            ViewBag.Card = card;
            ViewBag.Respondent = respondent;
            ViewBag.Subject = subject;

            return View(new ProcessModel(processId));
        }

        // ===================================================================================== []
        // Utils
        private static void ExecuteAction(int? actionType, int? respondent, int? subject, int? suspect, Identifiable<int, Process>.Identifier processId)
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