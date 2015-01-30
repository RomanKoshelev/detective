﻿using System.Web.Mvc;
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
            var processId = (Process.Identifier) id;

            return View(new ProcessModel(processId));
        }

        public ActionResult Play(int id, int? actionType, params int[] actionParams)
        {
            var processId = (Process.Identifier) id;
            if (actionType != null)
            {
                Schema.ExecuteProcess(processId, (Process.UserAction.ActionType)actionType, actionParams, autoSkip: true);
                return RedirectToAction("Play", "Process", new {id = processId});
            }
            return View(new ProcessModel(processId));
        }
    }
}